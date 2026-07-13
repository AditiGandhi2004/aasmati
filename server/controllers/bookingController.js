const Booking = require("../models/Booking");

// ============================
// Create Booking
// ============================

const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      customerName: req.body.customerName,
      email: req.body.email,
      phone: req.body.phone,

      rooms: req.body.rooms,

      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,

      totalAmount: req.body.totalAmount,

      paymentStatus: "Pending",
      bookingStatus: "Pending",
    });

    res.status(201).json({
      success: true,
      message: "Booking Created Successfully",
      booking,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================
// Get All Bookings
// ============================

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================
// Update Booking Status
// ============================

const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        bookingStatus: req.body.bookingStatus,
        paymentStatus: req.body.paymentStatus,
      },
      {
        new: true,
      }
    );

    res.json({
      success: true,
      booking,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBooking,
  getBookings,
  updateBookingStatus,
};