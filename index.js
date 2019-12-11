const express = require('express');
const app = express();
const port = 4000;

const axios = require('axios');

const util = require('util');
const fetch = require("node-fetch");

const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {

  getZipCode(res);

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


function getZipCode(res) {
   axios.get('https://ipapi.co/json/')
          .then((response) => {
            getRestaurants(response.data.postal, res);
          })
          .catch((error) => {
            console.log(error);
          }); // end API call
}

function getRestaurants(zip, res) {
  axios.get('https://data.cityofnewyork.us/resource/43nn-pn8j.json', {
            params: {
                "$limit" : 10,
                "$$app_token" : "rwWEn2Tw493ASSX8bzGjwuz8O",
                "zipcode": zip  // should be this.state.zip
            }
          })
          .then((response) => {

            // debugger;

            console.log('returning response data');
            res.send(response.data);
            // return the thingie up above somehow.

          })
          .catch((error) => {
            console.log(error);
          }); // end API call
}