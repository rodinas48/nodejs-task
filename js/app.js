const forecast = require('./forecast');
const geocode = require('./geocode');

const address = process.argv[2];
geocode(address, (error, data) => {
  if (error) {
      console.log("error : ", error);
  } else {
      console.log("data : ", data);
      forecast(data.latitude, data.longtitude);
  }
});

