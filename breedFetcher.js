const request = require('request');
const breed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => { // request body from the url
  if (error) {
    console.log("URL inputted is not valid.");
  } else {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('typeof before parse:', typeof body);
    //console.log('body:', body); // Print the HTML body


    const data = JSON.parse(body); // body becomes an object
    
    if (!data.length) { // info is in an array so we check the length to see if their is any info in it
      console.log("Breed info does not exist!");
      
    } else {
      console.log(data);
      const x = data[0].description;
      console.log(x);
      console.log('typeof: ', typeof data);
    }
  }
});