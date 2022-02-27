const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");

router.get("/", (req, res) => {
  const testers = req.query.testers ? req.query.testers.split(",") : "all";
  const devices = req.query.devices ? req.query.devices.split(",") : "all";
  let result = [];
  let errors = [];

  csv
    .parseFile(path.resolve(__dirname, "..", "db", "tester_device.csv"), {
      headers: true,
      ignoreEmpty: true,
    })
    .transform((data) => {
      if (testers !== "all") {
        if (testers.includes(data.testerId)) return data;
      } else {
        return data;
      }
    })
    .on("error", (error) => errors.push(error))
    .on("data", (row) => result.push(row))
    .on("end", () => {
      if (!result.length)
        res
          .status(404)
          .json(`Couldn't find any records that matches given criteria`);
      else if (!errors.length) {
        const formattedResult = result.reduce((accumulator, element) => {
          const indexOfTester = accumulator.findIndex(
            (item) => item.testerId === element.testerId
          );
          if (indexOfTester !== -1) {
            if (devices.includes(element.deviceId) || devices === 'all') {
              accumulator[indexOfTester].devices.push({
                deviceId: element.deviceId
              });
              return [...accumulator];
            }
            return [...accumulator];
          } else
            if (devices.includes(element.deviceId) || devices === 'all') {
              return [
                ...accumulator,
                {
                  testerId: element.testerId,
                  devices: [{ deviceId: element.deviceId }],
                },
              ];
            }
            return [...accumulator];
        }, []);
        res.status(200).json(formattedResult);
      } else res.status(422).json(errors);
    });
});

module.exports = router;
