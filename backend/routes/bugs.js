const router = require('express').Router();
const { query, validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');


router.get('/', (req, res) => {
  const country = req.query.country ? req.query.country.split(',') : 'all';
  const device = req.query.device ? req.query.device.split(',') : 'all';
  let result = [];
  let errors = [];

  csv.parseFile(path.resolve(__dirname, '..', '..', 'db', 'bugs.csv'), { headers: true, ignoreEmpty: true })
  .transform(data => {
    if (device === 'all' && country === 'all') return data;
    if (device !== 'all' && country !== 'all') {
      if (device.includes(data.deviceId) && country.includes(data.testerId)) return data;
    }
    if (device !== 'all' && country === 'all') {
      if (device.includes(data.deviceId)) return data;
    }
    if (device === 'all' && country !== 'all') {
      if (country.includes(data.testerId)) return data;
    }
  })
  .on('error', error => errors.push(error))
  .on('data', row => result.push(row))
  .on('end', () => {
    if (!result.length) res.status(404).json(`Couldn't find any records that matches given criteria`)
    else if (!errors.length) res.status(200).json(result);
    else res.status(422).json(errors);
  });

});

module.exports = router;