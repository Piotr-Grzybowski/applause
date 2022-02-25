const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

router.get('/', (req, res) => {
  let result = [];
  fs.createReadStream(path.resolve(__dirname, '..', '..', 'db', 'testers.csv'))
  .pipe(csv.parse({ headers: true, ignoreEmpty: true }))
  .on('error', error => res.status(500).json(error))
  .on('data', row => result.push(row))
  .on('end', () => {
    const finalResult = formatResult(result);
    res.status(200).json(finalResult);
  });
});

function formatResult(result) {
  return result.reduce((accumulator, element) => {
    const found = accumulator.findIndex(item => item.country === element.country);
    if (found > -1) {
      accumulator[found].id += ',' + element.testerId;
      return accumulator;
    }
    else return [
      ...accumulator,
      {
        id: element.testerId,
        country: element.country,
      }
    ]
  }, []);
}

module.exports = router;