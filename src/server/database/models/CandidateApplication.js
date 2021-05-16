const mongoose = require('../config');

const canditateApplicationSchema = new mongoose.Schema({
  email: String,
  name: String,
  phoneNumber: String,
  password: String,
  resume: String,
  rating: String,
  location: String,
  yearOfExperience: String,
  Resume: String,

  socialMedia: [
    {
      name: String,
      link: String,
    },
  ],
  skillsRequired: [
    {
      name: String,
      rating: Number,
    },
  ],
});
const CanditateApplication = mongoose.model(
  'CanditateApplication',
  canditateApplicationSchema
);

module.exports = CanditateApplication;
