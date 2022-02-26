function Result({ bugs, testers, devices }) {
  if (bugs.length > 0 && testers.length > 0 && typeof bugs !== 'string') {
    return (
      <div>
        <ul>
          {bugs.map((element) => {
            return (
              <li key={element.testerId}>
                {getFullName(testers, element.testerId) + ' '} {element.devices.map(device => {
                  return <p key={device.deviceId}>{`filed ${device.count} bugs for ${getDeviceName(devices, device.deviceId)}`}</p>
                })}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (typeof bugs === 'string') return <p>{bugs}</p>

  else return <div></div>;
}

function getIndex(array, id, nameOfId) {
  return array.findIndex((item) => parseInt(item[nameOfId]) === parseInt(id));
}
function getFullName(array, id) {
  if (getIndex(array, id, 'testerId') !== -1) {
    return array[getIndex(array, id, 'testerId')].firstName + " " + array[getIndex(array, id, 'testerId')].lastName;
  }
  return `Couldn't get proper name! Some error occurred!`;
}
function getDeviceName(array, id) {
  if (getIndex(array, id, 'deviceId') !== -1) {
    return array[getIndex(array, id, 'deviceId')].description;
  }
  return `Couldn't get proper device name! Some error occurred!`;
}

export default Result;
