const fetch = require('node-fetch');

exports.sendHiringRequestMail = async candidateData => {

    const mailData = {
        ...candidateData,
        subject: "Employer wants to hire candidates"
    };

    await fetch("https://formspree.io/f/xwkwyrzq", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(mailData),
    });
}

exports.sendCandidateDetailsMail = async candidateData => {

    const mailData = {
        ...candidateData,
        subject: "Candidate applied for job"
    };

    await fetch("https://formspree.io/f/xwkwyrzq", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(mailData),
    });
}
