 const request = require("request");

const fetchBreedDescription = (breed, callback) => {
    
  const site = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;

  request(site, (error, response, body) => {

    if(error){
      callback("Connection Error: " + error)
      return;
    } 
    if(response.statusCode >= 400){
      callback("HTTP Error: " + response.statusCode)
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
        callback("Sorry not cat found")
        return;
    }
    callback(null, data[0].description);

  });
};


module.exports = {fetchBreedDescription}