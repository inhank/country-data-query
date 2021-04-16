# country-data-query

Easy and powerful library for query complex country and regions data in simple and effective way by country code, currency code, dial code in various filters.

This is library offer to you and maintained by [Inhank advanced technologies.](https://inhank.com)

## Disclaimer

All country's and region data gathered from https://github.com/country-regions/country-region-data. If any data have incorrect information in this library simply rise pull request.

## Quick start

### install and import

```javascript
npm install country-data-query  //By npm or
yarn add country-data-query  // By yarn method

import countryDataQuery from 'country-data-query'; //es6 method or
const countryDataQuery = require('country-data-query'); //es5 method
```

### Query data

Data can query by the method **countryDataQuery(queryParams)** and
**queryParams** is just json object itbe constructed by
in following ways.

- List all countries
  ```javascript
  {
    country: {
    }
  }
  ```
- Get country by options

  ```javascript
  //type is must be in countrycode, dialcode and currencycode
  {country:{type:"countrycode",value:"IN"}} //or
  {country:{type:"dialcode",value:"+91"}} //or
  {country:{type:"currencycode",value:"INR"}} //or
  ```

- List country all regions

  ```javascript
  {
      country:{type:"countrycode",value:"IN"},
      region:{}
  }
  ```

- Get country region by code

  ```javascript
  countryDataQuery({
     country:{type:"countrycode",value:"IN"},
     region:{type:"code","AP"}
  })
  ```

## Data format

The data returned by this library in following pattern

**Country data**

```javascript
[
  {
    dial_code: "+91",
    currency: {
      code: "INR",
      name: "Indian Rupee",
      symbol: "Rs",
    },
    name: "India",
    code: "IN",
  },
];
```

**Region data**

```javascript
[
  {
    name: "Andhra Pradesh",
    code: "AP",
  },
];
```
