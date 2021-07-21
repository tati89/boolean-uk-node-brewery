//import express
const express = require("express")
//import morgan
const morgan = require("morgan")

const breweries = [{
    "id": 9094,
    "obdb_id": "bnaf-llc-austin",
    "name": "Bnaf, LLC",
    "brewery_type": "planning",
    "street": null,
    "address_2": null,
    "address_3": null,
    "city": "Austin",
    "state": "Texas",
    "county_province": null,
    "postal_code": "78727-7602",
    "country": "United States",
    "longitude": null,
    "latitude": null,
    "phone": null,
    "website_url": null,
    "updated_at": "2018-07-24T00:00:00.000Z",
    "created_at": "2018-07-24T00:00:00.000Z"
  },
  {
    "id": 9180,
    "obdb_id": "boulder-beer-co-boulder",
    "name": "Boulder Beer Co",
    "brewery_type": "regional",
    "street": "2880 Wilderness Pl",
    "address_2": null,
    "address_3": null,
    "city": "Boulder",
    "state": "Colorado",
    "county_province": null,
    "postal_code": "80301-5401",
    "country": "United States",
    "longitude": "-105.2480158",
    "latitude": "40.026439",
    "phone": null,
    "website_url": null,
    "updated_at": "2018-08-24T00:00:00.000Z",
    "created_at": "2018-07-24T00:00:00.000Z"
  },
  {
    "id": 9754,
    "obdb_id": "clermont-brewing-company-clermont",
    "name": "Clermont Brewing Company",
    "brewery_type": "planning",
    "street": null,
    "address_2": null,
    "address_3": null,
    "city": "Clermont",
    "state": "Florida",
    "county_province": null,
    "postal_code": "34711-2108",
    "country": "United States",
    "longitude": null,
    "latitude": null,
    "phone": null,
    "website_url": null,
    "updated_at": "2018-08-11T00:00:00.000Z",
    "created_at": "2018-07-24T00:00:00.000Z"
  }
]

const app = express()
app.use(morgan("dev"))

app.get("/breweries", (req, res) => {
  res.json({breweries});
});

const port = 4000

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})