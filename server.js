'use strict';

const express = require('express');
const multer = require('./multer.js');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/img/:id', async function (req, res) {
  if (!req.params.id) {
    res.status(400).send();
  }

  res.sendFile(`${__dirname}/uploads/${req.params.id}`);
});

const addOrderUpload = multer.upload.single('file');

app.post('/uploadTest', function(req, res){
  addOrderUpload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.log(err);
      res.send(JSON.stringify({ success: false, message: err.message }));
    } else if (err) {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    }

    let fileName = req.file.filename;
    res.send(fileName);
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
