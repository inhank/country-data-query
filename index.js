const rawData = require("./lib/data.json");
//prettier --write .

function countryDataQuery(params) {
  let data = [...rawData];
  let finalData;
  let countryIndex = -1;
  let regionIndex = -1;
  let countryData = [];


  //Check if country param available if check type return index
  if (params.country) {
    //if empty object return list
    if (params.country.type) {
      //if have proper params & values return index  else return empty array
      if (
        (params.country.type === "dialcode" ||
          params.country.type === "countrycode" ||
          params.country.type === "currencycode") &&
        params.country.value
      ) {
        //get index by type
        switch (params.country.type) {
          case "dialcode":
            countryIndex = data.findIndex(
              (x) => x.dial_code === params.country.value
            );
            countryData = data.filter(
              (x) => x.dial_code === params.country.value
            );
            break;
          case "countrycode":
            countryIndex = data.findIndex(
              (x) => x.code === params.country.value.toUpperCase()
            );
            countryData = data.filter(
              (x) => x.code === params.country.value.toUpperCase()
            );
            break;
          case "currencycode":
            countryIndex = data.findIndex(
              (x) => x.currency.code === params.country.value.toUpperCase()
            );
            countryData = data.filter(
              (x) => x.currency.code === params.country.value
            );
            break;
        }
        if (countryIndex === -1) return [];
      } else {
        return [];
      }
    } else {
      //return default list
      data.forEach((e) => {
        delete e.regions;
      });
      return data;
    }
  } else {
    return [];
  }

  if (countryIndex && params.region) {
    // empty object means list
    if (Object.keys(params.region).length === 0) {
      return data[countryIndex].regions;
    } else if (
      params.region.type &&
      params.region.value &&
      params.region.type === "code"
    ) {
      regionIndex = data[countryIndex].regions.findIndex(
        (x) => x.code === params.region.value.toUpperCase()
      );
      if (regionIndex === -1) return [];
    } else {
      return [];
    }
  }

  //if query single region or else single country
  if (countryIndex !== -1 && regionIndex !== -1) {
    finalData = [data[countryIndex].regions[regionIndex]];
  } else {
    finalData = countryData;
    //remove regions
    finalData.forEach((e) => {
      delete e.regions;
    });
  }
  return finalData;
}
module.exports = countryDataQuery;