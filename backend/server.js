const express = require('express');
const cors = require('cors');
const devicesRouter = require('./routes/devices');
const testersRouter = require('./routes/testers');
const bugsRouter = require('./routes/bugs');
const devicesForTester = require('./routes/devicesForTesters');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());
app.use('/db/', express.static(path.join(__dirname, 'db' )));
console.log(path.resolve(__dirname, 'db', 'testers.csv'));

// Routers
app.use('/api/devices/', devicesRouter);
app.use('/api/testers/', testersRouter);
app.use('/api/bugs/', bugsRouter);
app.use('/api/devicesForTester/', devicesForTester);

module.exports = app;