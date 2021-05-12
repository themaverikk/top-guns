const HireRequest = require('./database/models/HireRequest');
const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.json());
const fileupload = require('express-fileupload');
app.use(fileupload());

app.post('/api/hire', (req, res) => {
  const hireRequestDetails = req.body.hireRequestDetails;

  const hireRequest = new HireRequest(hireRequestDetails);

  hireRequest.save((err) => {
    if (err) {
      console.log('Error while saving hireRequest: ', err);
      throw err;
    }
  });
  res.json('life set');
});

app.get('/api/upload', function (req, res) {
  res
    .status(200)
    .send(
      '<form method="POST" enctype="multipart/form-data" action="/api/upload">' +
        '<input type="file" name="upl"/><input type="submit"/>' +
        '</form>'
    )
    .end();
});

const { upload } = require('./upload/upload');

app.post('/api/upload', upload);

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
