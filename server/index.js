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

// app.get('', async (req, res) => {
//     try {
//         const users = await Users.find({});
//         res.json(users);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });


app.post('/api/setprovider', async (req, res) => {
        var request = require("request");

        var options = { method: 'GET',
          url: 'https://tasktapp.us.auth0.com/api/v2/users-by-email',
          headers: {"authorization":"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InROMnB2MEhjYnhLSXlJOHpYZFRqMyJ9.eyJpc3MiOiJodHRwczovL3Rhc2t0YXBwLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJTSlZ3ZjRndmVlS050MEZxTzJzcTZ6ak5wb2MyNGpzQUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly90YXNrdGFwcC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY4MzAzNjkyMiwiZXhwIjoxNjgzMTIzMzIyLCJhenAiOiJTSlZ3ZjRndmVlS050MEZxTzJzcTZ6ak5wb2MyNGpzQSIsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgcmVhZDp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBkZWxldGU6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDpob29rcyB1cGRhdGU6aG9va3MgZGVsZXRlOmhvb2tzIGNyZWF0ZTpob29rcyByZWFkOmFjdGlvbnMgdXBkYXRlOmFjdGlvbnMgZGVsZXRlOmFjdGlvbnMgY3JlYXRlOmFjdGlvbnMgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDppbnNpZ2h0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOmxvZ3NfdXNlcnMgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIHVwZGF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHJlYWQ6YW5vbWFseV9ibG9ja3MgZGVsZXRlOmFub21hbHlfYmxvY2tzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHVwZGF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMgcmVhZDptZmFfcG9saWNpZXMgdXBkYXRlOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIGNyZWF0ZTpyb2xlcyBkZWxldGU6cm9sZXMgdXBkYXRlOnJvbGVzIHJlYWQ6cHJvbXB0cyB1cGRhdGU6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHVwZGF0ZTpicmFuZGluZyBkZWxldGU6YnJhbmRpbmcgcmVhZDpsb2dfc3RyZWFtcyBjcmVhdGU6bG9nX3N0cmVhbXMgZGVsZXRlOmxvZ19zdHJlYW1zIHVwZGF0ZTpsb2dfc3RyZWFtcyBjcmVhdGU6c2lnbmluZ19rZXlzIHJlYWQ6c2lnbmluZ19rZXlzIHVwZGF0ZTpzaWduaW5nX2tleXMgcmVhZDpsaW1pdHMgdXBkYXRlOmxpbWl0cyBjcmVhdGU6cm9sZV9tZW1iZXJzIHJlYWQ6cm9sZV9tZW1iZXJzIGRlbGV0ZTpyb2xlX21lbWJlcnMgcmVhZDplbnRpdGxlbWVudHMgcmVhZDphdHRhY2tfcHJvdGVjdGlvbiB1cGRhdGU6YXR0YWNrX3Byb3RlY3Rpb24gcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uc19zdW1tYXJ5IGNyZWF0ZTphY3Rpb25zX2xvZ19zZXNzaW9ucyBjcmVhdGU6YXV0aGVudGljYXRpb25fbWV0aG9kcyByZWFkOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgdXBkYXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgZGVsZXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgcmVhZDpjbGllbnRfY3JlZGVudGlhbHMgY3JlYXRlOmNsaWVudF9jcmVkZW50aWFscyB1cGRhdGU6Y2xpZW50X2NyZWRlbnRpYWxzIGRlbGV0ZTpjbGllbnRfY3JlZGVudGlhbHMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.IEz-F_TVkjTdpspbNkWX0sOpcMiQ2Tna5Rc-RImfVb3lQx2tZUIuEmWScnU5KfgMyc-Dts5sDwyWWh8Rj7mXUCLIR_-n0fLSYj_raoXvXUIJKo5PBbm9OfxGRU4BxcE7E7OSplDV_wdJkUrvmgpYRZdLOgPB5NjbASG9LnwmhXxADXpQ_HZYtwq6ODMXu5OrY6fM75Rp1tTsBaVdlAyOFzPvabuwX58aY83B2mXUzKzzJFrt6whcqEldq2bxjnFpqfFGMP4ezIxRC3-eM8RTPYW6DMpE6N55Eh4dXd5skp8B4G3ezKJyuajNMqka1tf4GdrYHZaGWv3INsYYJzBynQ"},
          params: {"email":req.body},
        //   body: '{"client_id":"X89QIeev3siA7mazortXo0gSZWuLM2bI0l","client_secret":"2ibDwgdxVyiK04o6QyK2FlGXBjZ0NoagNurT9H9ajbbkwRrs7FZzu9A1ksL8VQQ8","audience":"https://tasktapp.us.auth0.com/api/v2/","grant_type":"client_credentials"}'}
}
        request(options, function (error, response, body) {
          if (error) 
          res.status(500).json({ error: err.message });
          res.json(body);
        });
});

// const options = { 
//     method: "GET",
//     url: "/api/v2/users",
//     headers: { "authorization": "" },
//   };



const PORT =  3000;



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})