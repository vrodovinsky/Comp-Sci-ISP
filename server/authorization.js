var axios = require("axios").default;

var options = {
    method: 'POST',
    url: 'https://tasktapp.us.auth0.com/oauth/token',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: 'crsovDxspuUB20DmHNY2QP3Fzw0IKYgy',
        client_secret: 'fZfw9pZCyzhvRLHaXmlYMvmBJBdJqfgSQMc_yWekTleCqFzwsEGo67b3oQsF5baR',
        audience: 'https://tasktapp.us.auth0.com/api/v2/'
    })
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});