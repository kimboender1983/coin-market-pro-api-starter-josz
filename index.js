const express = require('express');
const app = express();
const getListings = require('./api.js');

// respond with listings-data when a GET request is made to http://localhost:3000/listings
app.get('/listings', async (req, res) => {
    const listings = await getListings();
    res.json(listings.data.data)
});

app.listen(3000, function () {
    console.log('Web server listening on port 3000');
});