function testersToCountries(result) {
  return result.reduce((accumulator, element) => {
    const found = accumulator.findIndex(item => item.country === element.country);
    if (found > -1) {
      accumulator[found].value += ',' + element.testerId;
      return accumulator;
    }
    else return [
      ...accumulator,
      {
        value: element.testerId,
        country: element.country,
      }
    ]
  }, []);
}

export default testersToCountries;