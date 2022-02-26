import axios from "axios";
import formatBugsList from './formatBugsList';

const getBugs = (countries = '', devices = '', setBugs) => {
  const endpoints = [
    `http://localhost:5000/api/bugs?country=${countries}&device=${devices}`,
    `http://localhost:5000/api/devicesfortester?testers=${countries}&devices=${devices}`
  ]
  Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then(([{ data: bugs }, { data: devicesForTester }]) => {
      setBugs(formatBugsList(bugs, devicesForTester));
    })
    .catch(error => {
      if (error) setBugs(`Error: ${error.response.data}`);
    });
}

export default getBugs;