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
**queryParams** is just json object it will be constructed by
in following ways.

- List all countries
  ```javascript
  {
    country: {}
  }
  ```
- Get country by filters

  ```javascript
  //type is must be in countrycode, dialcode and currencycode
  {country:{type:"countrycode",value:"IN"}} //or
  {country:{type:"dialcode",value:"+91"}} //or
  {country:{type:"currencycode",value:"INR"}}
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
     region:{type:"code",value:"AP"}
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
]
```

**Region data**

```javascript
[
  {
    name: "Andhra Pradesh",
    code: "AP",
  },
]
```
## Whats new

**1.0.3**
***Released on Aug 11, 2021***
* Removed and updated wrong iso codes
1. Telangana TS into TG
2. Sikkim WK into SK
* Merged Dadra and Nagar Haveli and Daman and Diu as single region in India.
* Added Ladakh union territory.
* References
1. https://en.wikipedia.org/wiki/ISO_3166-2:IN
2. https://en.wikipedia.org/wiki/States_and_union_territories_of_India


**1.0.2**

* Removed critical bug of array cloning method that cause break the data object. 
* Updated china yuan sign.