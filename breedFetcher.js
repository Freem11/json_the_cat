const request = require("request");

const input = process.argv.slice(2);

const site = "https://api.thecatapi.com/v1/breeds/search?q=" + input[0];

// console.log(site)
const fetcher = function(URl) {
  request(URl, (error, response, body) => {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.

    // console.log(body)
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Sorry not cat found");
      return;
    }
    const newData = data[0].description;

    console.log(newData);
    // console.log(typeof data);
  });
};

fetcher(site);
