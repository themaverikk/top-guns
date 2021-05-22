const mongoose = require("../config");

const hireRequestSchema = new mongoose.Schema({
    name: String,
    companyName: String,
    email: String,
    phone: String,

    questionsAnswers: [{
        question: String,
        answer: String
    }],

    requiredSkills: [String]

});
const HireRequest = mongoose.model('HireRequest', hireRequestSchema);

module.exports = HireRequest;
