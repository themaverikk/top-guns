const mongoose = require("../config");

const candidateApplicationSchema = new mongoose.Schema({
    email: String,
    name: String,
    phoneNumber: String,
    resumeUrl: String
});
const CandidateApplication = mongoose.model('CandidateApplication', candidateApplicationSchema);

module.exports = CandidateApplication;
