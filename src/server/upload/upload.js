const AWS = require('aws-sdk');
const path = require('path');
const dirPath = path.join(__dirname, '../awsconfig.json');
AWS.config.loadFromPath(dirPath);
var s3 = new AWS.S3();

exports.uploadResumeToS3 = async resumeFile => {
  console.log("uploading resume file to s3: ", resumeFile);

  const fileExtension = resumeFile.name.split('.').slice(-1)[0];
  const s3ResumeFileName = Date.now().toString() + '.' + fileExtension;
  const params = {
    Key: s3ResumeFileName,
    Body: resumeFile.data,
    Bucket: 'top-guns-resume-upload',
  };

  try {
    const s3Response = await s3.upload(params).promise();
    console.log("Successfully uploaded resume to s3: ", s3Response);
    return `https://s3.ap-south-1.amazonaws.com/top-guns-resume-upload/${s3ResumeFileName}`;
  } catch (err) {
    console.log("Error while uploading resume to s3: ", err);
    throw err;
  }
}
