const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const categoryRoute = require("./routes/categoryRoute");
require("dotenv").config();
const dbConnection = require("./config/db");
const ApiError = require("./utils/apiError");
const globalError = require("./middleware/errorHandling");

const app = express();
app.use(express.json());
app.use(cors());
dbConnection();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode : ${process.env.NODE_ENV}`);
}

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

app.use("/api/categories", categoryRoute);

/*
app.all('*',(req,res,next)=>{
next( new ApiError (`this page not found! ${req.originalUrl}`, 404))
});
*/
app.use(globalError);

process.on("unhandledRejection", (error) => {
  console.log(`unhandledRejection Error: ${error.name} | ${error.massage}`);
});

app.listen(port, () => {
  console.log("Application Runninr Successfuly !");
});
