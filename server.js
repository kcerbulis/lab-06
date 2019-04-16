 'use strict';

 require('dotenv').config();

// Global Constants
 const PORT = process.env.PORT || 3000;
 const express = require('express');
 const cors = require('cors');

 // Server Definitions
 const app = express();
 app.use(cors());


function Location (searchQueary, formattedAddress, latitude, longitude){
  this.search_queary = searchQueary;
  this.formatted_address = formattedAddress;
  this.lat = latitude;
  this.lng = longitude;
}

let test = new Location ('Seattle', 'Seattle, WA', '234567', '1234');
console.log(test);


 // What the server does
 app.get('/location', (request,response) =>{
   const testData = require('./data/geo.json')
   response.send(testData);
   const responseObject = {search_queary, formatted_query, latitude, longitude};
   // const formatted_query = testData.results[0].geometry.location
   // console.log(formatted_query);
 })




// What the server does
app.get('/location', function(request, response){
  response.send('seattle, wa');
})

app.use('*', (request,response) =>{
  response.send('Hello there');
});

// Server start
app.listen(PORT, () =>{
  console.log(`The port is: ${PORT}`)
})
