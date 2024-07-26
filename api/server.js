const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const formRoutes = require("./routes/form");

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/form", formRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log("Connected to DB & Listening on PORT", 4000);
    });
  })
  .catch((error) => {
    console.log(error);
  });
