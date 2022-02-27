import { getTotalAmountOfBugs } from './utilsForResult';

function formatBugsList(bugs, devicesForTester) {
  if (typeof bugs === "string") return bugs;
  const formattedDevicesList = devicesForTester.map((device) => {
    return [device, bugs.filter((bug) => {
        return bug.testerId === device.testerId;
      })
    ];
  }).map(listItem => {
    return {
      testerId: listItem[0].testerId,
      devices: listItem[0].devices.reduce((total, element) => {
        total.push({
          deviceId: element.deviceId,
          count: listItem[1].filter(item => {
            return item.deviceId === element.deviceId;
            }).length
        });
        return [
          ...total
        ]
      }, [])
    }
  });
  return formattedDevicesList.sort((a, b) => {
    return (getTotalAmountOfBugs(b.devices) - getTotalAmountOfBugs(a.devices));
  });
}

export default formatBugsList;
