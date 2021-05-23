const HireRequest = require('./database/models/HireRequest');
const { uploadResumeToS3 } = require('./utils/resumeUpload');

const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.json());
const fileupload = require('express-fileupload');
const CandidateApplication = require('./database/models/CandidateApplication');
const { sendCandidateDetailsMail, sendHiringRequestMail } = require('./utils/mailSender');
app.use(fileupload());

app.post('/api/hire', async (req, res) => {

  try {
    sendHiringRequestMail(req.body)
      .then(() => {
        console.log("Successfully sent email for hire request");
      })
      .catch(err => {
        console.error("Error while sending email for hire request: ", err);

      });

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
    const candidateData = {
      name,
      email,
      resumeUrl
    };

    sendCandidateDetailsMail(candidateData)
      .then(() => {
        console.log("Successfully sent email for candidate application");
      })
      .catch(err => {
        console.error("Error while sending email for candidate application: ", err);

      });

    const candidateApplication = new CandidateApplication(candidateData);

    await candidateApplication.save();
    console.log("Successfully stored candidate application in DB");

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
