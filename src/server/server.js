const HireRequest = require('./database/models/HireRequest');
const { uploadResumeToS3 } = require('./upload/resumeUpload');

const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.json());
const fileupload = require('express-fileupload');
const CandidateApplication = require('./database/models/CandidateApplication');
app.use(fileupload());

app.post('/api/hire', async (req, res) => {

  try {
    const hireRequest = new HireRequest(req.body);

    await hireRequest.save();
    console.log("Successfully saved hire request in DB")

    res.json({
      status: "success"
    });
  } catch (err) {
    console.log("Error while processing hire request: ", err);
    res.json({
      status: "failure"
    });
  }
});


app.post('/api/apply', async (req, res) => {

  try {
    const name = req.body.name;
    const email = req.body.email;
    const resumeFile = req.files.resume;

    const resumeUrl = await uploadResumeToS3(resumeFile);

    const candidateApplication = new CandidateApplication({
      name,
      email,
      resumeUrl
    });

    await candidateApplication.save();
    console.log("Successfully stored candidate application in DB");

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
