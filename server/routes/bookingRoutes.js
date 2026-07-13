const express = require("express");

const router = express.Router();

const {
  createBooking,
  getBookings,
  updateBookingStatus,
} = require("../controllers/bookingController");

// Create Booking
router.post("/", createBooking);

// Get All Bookings
router.get("/", getBookings);

// Update Booking Status
router.put("/:id", updateBookingStatus);

module.exports = router;