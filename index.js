const express = require('express');
const app = express();
const port = 4000;
const fetch = require('node-fetch');
const querystring = require('querystring');



app.get('/', (req, res) => {

    // res.send('Hello World!');


// "https://drrobotmck-nyc-health-inspection-results-v1.p.rapidapi.com/restaurants?dba=dunkin%20donuts&zip_code=11213&boro=brooklyn"

    let params = {
            "method": "GET",
            "$limit" : 20,
            "$$app_token" : "rwWEn2Tw493ASSX8bzGjwuz8O",
            "zipcode": 11213
        };


    let urString;

    urString = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json?' + querystring.stringify(params);

    console.log(urString);



    fetch(urString, {
        
    })
        .then(response => {
            console.log(response);
            res.json(response);
        })
        .catch(err => {
            console.log(err);
        });


    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
