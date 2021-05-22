const AWS = require('aws-sdk');
const path = require('path');
const dirPath = path.join(__dirname, '../awsconfig.json');
AWS.config.loadFromPath(dirPath);
var s3 = new AWS.S3();

exports.uploadResumeToS3 = async resumeFile => {
  console.log("uploading resume file to s3: ", resumeFile);

  if (!resumeFile) {
    console.log("Got null resume file while trying to upload to s3... throwing error");
    throw Error("Invalid resume");
  }

  const extensionIndex = resumeFile.name.lastIndexOf(".");

  if (extensionIndex < 0 || extensionIndex >= resumeFile.name.length - 1) {
    console.log("Error while trying to upload resume to s3: file doesn't have any extension");
    throw Error("Invalid resume");
  }

  const fileName = resumeFile.name.substring(0, extensionIndex);
  const fileExtension = resumeFile.name.substring(extensionIndex + 1);

  const allowedExtensions = ["pdf", "doc", "docx", "txt"];

  if (!allowedExtensions.includes(fileExtension)) {
    console.log("Error while trying to upload resume to s3, invalid file extension: ", fileExtension);
    throw Error("Invalid resume");
  }

  const s3ResumeFileName = fileName + '_' + Date.now().toString() + '.' + fileExtension;
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
