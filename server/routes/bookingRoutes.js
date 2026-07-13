const express = require("express");

const router = express.Router();

const {
  createBooking,
  getBookings,
  getBookingHistory,
  updateBookingStatus,
} = require("../controllers/bookingController");

// Create Booking
router.post("/", createBooking);

// Get All Bookings
router.get("/", getBookings);
// Get Booking History by Email
router.get("/history/:email", getBookingHistory);
// Update Booking Status
router.put("/:id", updateBookingStatus);

module.exports = router;