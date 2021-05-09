const mongoose = require("../config");

const questionSchema = new mongoose.Schema({
    text: String
});

const answerSchema = new mongoose.Schema({
    text: String
});

const skillsSchema = new mongoose.Schema({
    text: String
});

const hireRequestSchema = new mongoose.Schema({
    email: String,
    name: String,
    phoneNumber: String,

    questionsAnswers: [{
        question: questionSchema,
        answer: answerSchema
    }],

    skillsRequired: [{
        text: String
    }]

});
const HireRequest = mongoose.model('HireRequest', hireRequestSchema);

module.exports = HireRequest;
