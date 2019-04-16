 'use strict';

 require('dotenv').config();

// Global Constants
 const PORT = process.env.PORT || 3000;
 const express = require('express');
 const cors = require('cors');

 // Server Definitions
 const app = express();
 app.use(cors());


function Location (query, formattedAddress, latitude, longitude){
  this.search_query = query;
  this.formatted_address = formattedAddress;
  this.lat = latitude;
  this.lng = longitude;
}

let test = new Location ('Seattle', 'Seattle, WA', '234567', '1234');
console.log(test);



 app.get('/location', (request,response) =>{
     //gets front end data
    const search_query = 'frontEndQuery';
    //gets other data
    const testData = require('./data/geo.json');
    const formatted_query = testData.results[0].formatted_address;
    console.log(formatted_query);
    const lattitude = testData.results[0].geometry.location.lat;
    const longtitude = testData.results[0].geometry.location.lng;
    const responseObject = {search_query, formatted_query, lattitude, longtitude};
    response.send(responseObject);
    return responseObject;
  });


// Working on getting the weather to work. Code still in progress


  // app.get('/weather', (request,response) =>{
  //     //gets front end data
  //    const search_query = 'frontEndQuery';
  //    //gets other data
  //    const testData = require('./data/darksky.json');
  //
  //    for(let i = 0; i < Object.value(testData).length; i++)
  //      if (testData[i].latitude === lattitude && testData[i].longtitude === longtitude){
  //       const forecast  =  testData[i].summary
  //      }
  //
  //  });





// --------------------Paste Here----------------------------



// --------------------Paste Here----------------------------
