import axios from "axios";

const getDevicesAndCountries = (setCountries, setDevices) => {
let endpoints = [
  'http://localhost:5000/api/testers/',
  'http://localhost:5000/api/devices/'
]
Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
  .then(([{ data: country }, { data: devices }]) => {
    setCountries(country);
    setDevices(devices);
    console.log(country, devices);
  })
  .catch(error => {
    if (error) console.log(error);
  });
}

export default getDevicesAndCountries;