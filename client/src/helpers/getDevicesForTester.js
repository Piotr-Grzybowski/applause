import axios from "axios";

const getDevicesForTester = (testers = '', setDevicesForTester) => {
  axios.get(`http://localhost:5000/api/devicesfortester?testers=${testers}`)
    .then(({ data: bugs}) => {
      setDevicesForTester(bugs);
    })
    .catch(error => {
      if (error) setDevicesForTester(error.response.data);
    });
}

export default getDevicesForTester;