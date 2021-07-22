//import express
const express = require("express");
//import morgan
const morgan = require("morgan");

const breweriesRouter = require("./resources/breweries/routers")


const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/breweries", breweriesRouter)





const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
