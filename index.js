const express = require('express');
const app = express();
const port = 3001;

const axios = require('axios');

const util = require('util');




app.get('/', (req, res) => {

    axios.get('https://data.cityofnewyork.us/resource/43nn-pn8j.json', {
        params: {
            "$limit" : 10,
            "$$app_token" : "rwWEn2Tw493ASSX8bzGjwuz8O",
            "zipcode": 11213    
        }
      })
      .then(function (response) {
        console.log(response);
        res.json(response);
      })
      .catch(function (error) {
        console.log(error);
      });


});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));






function ajaxCall(){

    $.ajax({
        url: "https://data.cityofnewyork.us/resource/43nn-pn8j.json",
        type: "GET",
        data: {
          "$limit" : 20,
          "$$app_token" : "rwWEn2Tw493ASSX8bzGjwuz8O",
          "zipcode": 11213
        }
    }).done(function(data) {
      // alert("Retrieved " + data.length + " records from the dataset!");
      console.log(data);

      res.json(data);
    });

}