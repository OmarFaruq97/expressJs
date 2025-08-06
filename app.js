// app.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Correctly import the router
const employeeRoutes = require("./routes/employee.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Use the routes middleware properly
app.use("/api/employees", employeeRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Employee CRUD API is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});