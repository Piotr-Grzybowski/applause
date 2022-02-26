import axios from "axios";
import formatBugsList from './formatBugsList';

const getBugs = (countries = '', devices = '', setBugs) => {
  const endpoints = [
    `http://localhost:5000/api/bugs?country=${countries}&device=${devices}`,
    `http://localhost:5000/api/devicesfortester?testers=${countries}`
  ]
  Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then(([{ data: bugs }, { data: devicesForTester }]) => {
      setBugs(formatBugsList(bugs, devicesForTester));
    })
    .catch(error => {
      if (error) setBugs(error); console.log(error);
    });
}

export default getBugs;