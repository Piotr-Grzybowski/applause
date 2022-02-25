import axios from "axios";

const getBugs = (countries = '', devices = '', setBugs) => {
  axios.get(`http://localhost:5000/api/bugs?country=${countries}&device=${devices}`)
    .then(({ data: bugs}) => {
      setBugs(bugs);
    })
    .catch(error => {
      if (error) setBugs(error.response.data);
    });
}

export default getBugs;