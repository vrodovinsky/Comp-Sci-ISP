const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const db = require('./db');
const Users = require('./models/users');
const Service_providers = require('./models/service_providers');
const Reviews = require('./models/reviews');
const Appointments = require('./models/appointments');

const app = express();


app.use(cors());
app.use(bodyParser.json());

app.get('/api/users', async (req, res) => {
    try {
        const users = await Users.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/users/:id', async (req, res) => {
    try {
        const users = await Users.findById(req.params.id);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/users', async (req, res) => {
    try {
        const users = await Users(req.body);
        console.log(req);

        await users.save();
        res.json(users);
    } catch (err) {
        //console.log(err);
        console.log("Hello");
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/signup', async (req, res) => {
    try {
        const users = await Users(req.body);
        await users.save();
        res.json(users);
    } catch (err) {
        res.status(500).json;
    }
});

app.get('/api/service_providers', async (req, res) => {
    try {
        const service_providers = await Service_providers.find({});
        res.json(service_providers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/service_providers/:id', async (req, res) => {
    try {
        const service_providers = await Service_providers.findById(req.params.id);
        res.json(service_providers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/service_providers', async (req, res) => {
    try {
        const service_providers = await Service_providers(req.body);
        await service_providers.save();
        res.json(users);
    } catch (err) {
        res.status(500).json;
    }
});

app.get('/api/reviews', async (req, res) => {
    try {
        const reviews = await Reviews.find({});
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/reviews/:id', async (req, res) => {
    try {
        const reviewss = await Reviews.findById(req.params.id);
        res.json(reviewss);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/reviews', async (req, res) => {
    try {
        const reviews = await Reviews(req.body);
        await reviews.save();
        res.json(reviews);
    } catch (err) {
        res.status(500).json;
    }
});

app.get('/api/appointments', async (req, res) => {
    try {
        const appointments = await Appointments.find({});
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/appointments/:id', async (req, res) => {
    try {
        const appointments = await Appointments.findById(req.params.id);
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/appointments', async (req, res) => {
    try {
        const appointments = await Appointments(req.body);
        await appointments.save();
        res.json(Appointments);
    } catch (err) {
        res.status(500).json;
    }
});


const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})