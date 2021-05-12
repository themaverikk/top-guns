var AWS = require('aws-sdk');
// var fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '../awsconfig.json');
console.log(dirPath);
AWS.config.loadFromPath(dirPath);
var s3 = new AWS.S3();

exports.upload = (req, res, next) => {
  var sampleFile = req.files.upl;
  console.log(sampleFile);
  var ext = sampleFile.name.split('.').slice(-1)[0];

  var filename = Date.now().toString() + '.' + ext;
  const params = {
    Key: filename,
    Body: sampleFile.data,
    Bucket: 'top-guns-resume-upload',
  };
  s3.upload(params, (err, res1) => {
    // fs.unlinkSync(enterPath);
    if (err) {
      console.log(err, 'err');
      res.json({ success: 0, err: err });
    } else {
      console.log(res, 'res');
      var path = `https://s3.ap-south-1.amazonaws.com/top-guns-resume-upload/${filename}`;
      // fs.writeFileSync(outputPath, done);
      res.json({ success: 1, filename: path });
    }
  });

  // console.log(sampleFile);
  // const extend = '.pdf'
  // uploadPath = path.join(__dirname, '/uploads', sampleFile.name);

  // sampleFile.mv(uploadPath, function (err) {
  //   if (err) {
  //     console.log('hi  ');
  //     return res.status(500).send(err);
  //   } else {
  //     var name = sampleFile.name;
  //     const enterPath = path.join(__dirname, `/uploads/${name}`);
  //     const file = fs.readFileSync(enterPath);

  //     var filename = Date.now().toString() + '.' + ext;
  //     const params = {
  //       Key: filename,
  //       Body: file,
  //       Bucket: 'top-guns-resume-upload',
  //     };
  //     s3.upload(params, (err, res1) => {
  //       fs.unlinkSync(enterPath);
  //       if (err) {
  //         console.log(err, 'err');
  //         res.json({ success: 0, err: err });
  //       } else {
  //         console.log(res, 'res');
  //         var path = `https://s3.ap-south-1.amazonaws.com/top-guns-resume-upload/${filename}`;
  //         // fs.writeFileSync(outputPath, done);
  //         res.json({ success: 1, filename: path });
  //       }
  //     });
  //   }
  // });
};
