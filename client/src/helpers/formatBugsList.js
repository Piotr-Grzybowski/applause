function formatBugsList(bugs, devicesForTester) {
  if (typeof bugs === "string") return bugs;
  return devicesForTester.map((device) => {
    return [device, bugs.filter((bug) => {
        return bug.testerId === device.testerId;
      })
    ];
  }).map(listItem => {
    return [{
      testerId: listItem[0].testerId,
      devices: listItem[0].devices.reduce((total, element) => {
        return [
          ...total,
          {
            deviceId: element.deviceId,
            count: listItem[1].filter(item => {
              return item.deviceId === element.deviceId;
            }).length
          }
        ]
      }, [])
    }]
  })
}

export default formatBugsList;
