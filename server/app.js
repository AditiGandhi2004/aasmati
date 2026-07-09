const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Hotel Asmati Backend Running"
  });
});

// Booking API Route
app.use("/api/bookings", require("./routes/bookingRoutes"));

module.exports = app;