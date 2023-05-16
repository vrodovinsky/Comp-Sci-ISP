const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const db = require('./db');
const Users = require('./models/users');
const Service_providers = require('./models/service_providers');
const Reviews = require('./models/reviews');
const Appointments = require('./models/appointments');
const listEndpoints = require('express-list-endpoints')

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
        await users.save();
        res.json(users);
    } catch (err) {
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

app.put('/api/updateAccount/:id', async (req, res) => {
    try {
        const users = await Users.findById(req.params.id);

        if (req.body.firstName)
            users.firstName = req.body.firstName
        if (req.body.lastName)
            users.lastName = req.body.lastName
        if (req.body.email)
            users.email = req.body.email

        const updatedUser = await users.save();


        res.json(updatedUser);
    } catch (err) {
        res.status(500).json;
    }
});

app.get('/api/service_providers', async (req, res) => {
    try {
        let query = {};
        if (req.query.service_name) {
            query = {
                Services: {
                    '$elemMatch': {
                        Name: req.query.service_name
                    }
                }
            };
        }
        const service_providers = await Service_providers.find(query);
        res.json(service_providers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// app.get('/api/service_providers/services/:service_name', async (req, res) => {
//     try {
//         const query = {
//             Services: {
//                 '$elemMatch': {
//                     Name: req.params.service_name
//                 }
//             }
//         };
//         console.log('Searching Providers' + req.params.service_name)
//         const service_providers = await Service_providers.find(query);
//         res.json(service_providers);

//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

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
        res.json(service_providers);
    } catch (err) {
        res.status(500).json({ error: err.message });
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
        res.status(500).json({ error: err.message });
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
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// requires an authorization paramater with the API Access Token
app.get('/api/setprovider', async (req, res) => {
    var request = require("request");

    var options = {
        method: 'GET',
        url: 'https://tasktapp.us.auth0.com/api/v2/users',
        headers: { "authorization": req.headers.authorization },
        params: { q: `id:${req.body.id}`, search_engine: 'v3' },
    }
    request(options, function (error, response, body) {
        if (error)
            res.status(500).json({ error: err.message });
        res.json(body);
        console.log(body);
    });
});

const PORT = 3000;

console.log(listEndpoints(app));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})