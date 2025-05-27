const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
  if (req.url === '/fileupload' && req.method.toLowerCase() === 'post') {
    const form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
      if (err) {
        console.error('Form parse error:', err);
        res.write('Form parse error');
        return res.end();
      }

      const uploadedFile = files.filetoupload?.[0]; // grab the first file
      if (!uploadedFile || !uploadedFile.filepath) {
        res.write('No file uploaded or missing file path.');
        return res.end();
      }

      const oldpath = uploadedFile.filepath;
      const newpath = path.join('C:/Users/adria/Downloads/', uploadedFile.originalFilename);

      fs.rename(oldpath, newpath, function (err) {
        if (err) {
          console.error('Error moving file:', err);
          res.write('Rename failed: ' + err.message);
          return res.end();
        }
        res.write('File uploaded and moved to Downloads!');
        res.end();
      });
    });
    
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);