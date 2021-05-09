const HireRequest = require('./database/models/HireRequest');
const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.json());

app.post('/api/hire', (req, res) => {
    const hireRequestDetails = req.body.hireRequestDetails;

    const hireRequest = new HireRequest(hireRequestDetails);

    console.log("hireRequestDetails: ", hireRequestDetails);

    hireRequest.save(err => {
        if (err) {
            console.log("Error while saving hireRequest: ", err);
            throw err;
        }
    });
    res.json("life set");
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});