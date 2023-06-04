const express = require("express");
const mongoose = require("mongoose");
const timeRoutes= require("./api/routes/stopwatchtime")

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use("/api/time", timeRoutes)

// Connect to MongoDB
const mongoURI = "mongodb://127.0.0.1:27017/reactTimer-db"; // example: Replace-with-your-MongoDB-connection-URI
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));