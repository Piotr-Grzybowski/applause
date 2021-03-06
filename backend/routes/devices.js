const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');


router.get('/', (req, res) => {
  let result = [];
  let errors = [];

  csv.parseFile(path.resolve(__dirname, '..', 'db', 'devices.csv'), { headers: true, ignoreEmpty: true })
  .on('error', error => errors.push(error))
  .on('data', row => result.push(row))
  .on('end', () => {
    if (!result.length) res.status(404).json(`Couldn't find any records that matches given criteria`)
    else if (!errors.length) res.status(200).json(result);
    else res.status(422).json(errors);
  });
});

module.exports = router;