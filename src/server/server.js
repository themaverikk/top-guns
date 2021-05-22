const HireRequest = require('./database/models/HireRequest');
const { uploadResumeToS3 } = require('./upload/upload');

const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.json());
const fileupload = require('express-fileupload');
app.use(fileupload());

app.post('/api/hire', (req, res) => {

  const hireRequest = new HireRequest(req.body);

  hireRequest.save(err => {
    if (err) {
      console.log('Error while saving hireRequest: ', err);
      throw err;
    }
  });

  res.json({
    status: "success"
  });
});


app.post('/api/apply', (req, res) => {

  try {
    const resumeFile = req.files.resume;
    const resumeUrl = uploadResumeToS3(resumeFile);

    const hireRequest = new HireRequest(hireRequestDetails);

    hireRequest.save(err => {
      if (err) {
        console.log('Error while saving hireRequest: ', err);
        throw err;
      }
    });

    res.json({
      status: "success"
    });

  } catch (err) {
    console.log("Error while serving request: ", err);

    res.json({
      status: "failure"
    })
  }
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
