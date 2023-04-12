const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const db = require('./db');
const User = require('./models/user');
const Service_provider = require('./models/service_provider');
const Reviews = require('./models/reviews');
const Appointments = require('./models/appointments');
const Reviews = require('./models/reviews');

const app = express();

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/users/:id', async (req, res) => {
    try {
        const users = await Users.findByID(req.params.id);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/users/:id', async (req, res) => {
    try {
        const users = await Users(req.body);
        await users.save();
        res.json(users);
    } catch (err) {
        res.status(500).json;
    }
});

app.get('/api/service_provider', async (req, res) => {
    try {
        const service_provider = await Service_provider.find({});
        res.json(service_provider);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/service_provider/:id', async (req, res) => {
    try {
        const service_provider = await Service_provider.findByID(req.params.id);
        res.json(service_provider);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/service_provider/:id', async (req, res) => {
    try {
        const service_provider = await Service_provider(req.body);
        await service_provider.save();
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
        const reviews = await Reviews.findByID(req.params.id);
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/reviews/:id', async (req, res) => {
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
        const appointments = await Appointments.findByID(req.params.id);
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/appointments/:id', async (req, res) => {
    try {
        const appointments = await Appointments(req.body);
        await appointments.save();
        res.json(Appointments);
    } catch (err) {
        res.status(500).json;
    }
});


const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})