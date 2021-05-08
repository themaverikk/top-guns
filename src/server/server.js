const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// place holder for the data
const users = [{ name: "Arjun" }];

app.use(express.json());
app.use(express.static(path.join(__dirname, '../my-app/out')));

app.get('/api/users', (req, res) => {
    console.log('api/users called!')
    res.json(users);
});

app.post('/api/user', (req, res) => {
    const user = req.body.user;
    console.log('Adding user:::::', user);
    users.push(user);
    res.json("user addedd");
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});