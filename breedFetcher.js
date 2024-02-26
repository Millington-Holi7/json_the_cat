const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => { // request body from the url

    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body); // body becomes an object
    if (!data.length) { // info is in an array so we check the length to see if their is any info in it
      callback("Breed info does not exist!", null);
      return;
    }

    const x = data[0].description;
    callback(null, x);
  });
};

module.exports = { fetchBreedDescription };