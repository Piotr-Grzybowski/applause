export function getIndex(array, id, nameOfId) {
  return array.findIndex((item) => parseInt(item[nameOfId]) === parseInt(id));
}
export function getFullName(array, id) {
  if (getIndex(array, id, "testerId") !== -1) {
    return (
      array[getIndex(array, id, "testerId")].firstName +
      " " +
      array[getIndex(array, id, "testerId")].lastName
    );
  }
  return `Couldn't get proper name! Some error occurred!`;
}
export function getDeviceName(array, id) {
  if (getIndex(array, id, "deviceId") !== -1) {
    return array[getIndex(array, id, "deviceId")].description;
  }
  return `Couldn't get proper device name! Some error occurred!`;
}

export function getTotalAmountOfBugs(bugsArray) {
  let result = 0;
  bugsArray.forEach(element => {
    result += element.count;
  });
  return result;
}