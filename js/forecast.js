const request = require("request");
const forecast = (latitude, longtitude, callback) => {
  const url =
    "http://api.weatherapi.com/v1/current.json?key=4de622afc62e441cae3114802240203&q=" +
    latitude +
    "," +
    longtitude +
    "&aqi=no";

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("error occured", undefined);
    } else if (response.body.error) {
      callback(response.body.error.message, undefined);
    } else {
      console.log(
        undefined,
        response.body.location.name +
          ", it is " +
          response.body.current.condition.text +
          ", " +
          response.body.current.temp_c +
          ".C"
      );
    }
  });
};

module.exports = forecast;
