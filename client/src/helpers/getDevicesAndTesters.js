import axios from "axios";

const getDevicesAndTesters = (setTesters, setDevices) => {
let endpoints = [
  'http://localhost:5000/api/testers/',
  'http://localhost:5000/api/devices/'
]
Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
  .then(([{ data: tester }, { data: devices }]) => {
    setTesters(tester);
    setDevices(devices);
  })
  .catch(error => {
    if (error) console.log(error);
  });
}

export default getDevicesAndTesters;