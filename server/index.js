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

app.get('/users', async (req, res) => {
    try {
        const users = await Users.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const users = await Users.findById(req.params.id);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/users', async (req, res) => {
    try {
        const users = await Users(req.body);
        await users.save();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/signup', async (req, res) => {
    try {
        const users = await Users(req.body);
        await users.save();
        res.json(users);
    } catch (err) {
        res.status(500).json;
    }
});

app.put('/updateAccount/:id', async (req, res) => {
    try {
        const data = {
            "name": req.body.name,
            "email": req.body.email,
        }

        const ManagementClient = require('auth0').ManagementClient;
        const management = new ManagementClient({
            domain: '{YOUR_ACCOUNT}.auth0.com',
            clientId: '{ YOUR_NON_INTERACTIVE_CLIENT_ID }',
            clientSecret: '{YOUR_NON_INTERACTIVE_CLIENT_SECRET}',
            scope: 'read:users update:users',
        });

        const params = { id: req.params.id };

        management.updateUser(params, data, function (err, user) {
            if (err) {
                console.log(err)
            }

            // Updated user.
            console.log(user);
            res.json(user);
        });
    } catch (err) {
        res.status(500).json;
    }
});

app.get('/service_providers', async (req, res) => {
    try {
        let query = {};
        if (req.query.service_name) {
            query = {
                Services: {
                    '$elemMatch': {
                        Name: { $regex: req.query.service_name, $options: 'i' }
                    }
                }
            };
        }
        const service_providers = await Service_providers.find(query);

        const filtered = service_providers.map((p) => {
            const ss = p.Services.filter(s => s.Name.indexOf(req.query.service_name) >= 0)
            p.Services = ss;
            return p;
        });
        res.json(filtered);
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

app.get('/service_providers/:id', async (req, res) => {
    try {
        const service_providers = await Service_providers.findById(req.params.id);
        res.json(service_providers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/service_providers', async (req, res) => {
    try {
        const service_providers = await Service_providers(req.body);
        await service_providers.save();
        res.json(service_providers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/reviews', async (req, res) => {
    try {
        const reviews = await Reviews.find({});
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/reviews/:id', async (req, res) => {
    try {
        const reviewss = await Reviews.findById(req.params.id);
        res.json(reviewss);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/reviews', async (req, res) => {
    try {
        const reviews = await Reviews(req.body);
        await reviews.save();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/appointments', async (req, res) => {
    try {
        const appointments = await Appointments.find({});
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/appointments/:id', async (req, res) => {
    try {
        const appointments = await Appointments.findById(req.params.id);
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/appointments', async (req, res) => {
    try {
        const appointments = await Appointments(req.body);
        await appointments.save();
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// requires an authorization paramater with the API Access Token
app.get('/auth0', async (req, res) => {
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