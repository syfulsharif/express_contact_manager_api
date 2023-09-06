const express = require("express");
const errorHandler = require("./middlewear/errorHandler");
const connectDB = require("./config/dbConnection");

const dotenv = require("dotenv").config();

connectDB();

const app = express();

// const port = process.env.PORT || 5000;

const port = 5000;



app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);



app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
