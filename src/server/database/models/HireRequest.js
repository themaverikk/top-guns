const mongoose = require("../config");

const hireRequestSchema = new mongoose.Schema({
    email: String,
    name: String,
    phoneNumber: String,

    questionsAnswers: [{
        question: String,
        answer: String
    }],

    requiredSkills: [String]

});
const HireRequest = mongoose.model('HireRequest', hireRequestSchema);

module.exports = HireRequest;
