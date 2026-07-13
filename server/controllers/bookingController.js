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
// Get Booking History by Email
// ============================

const getBookingHistory = async (req, res) => {
  try {

    const bookings = await Booking.find({
      email: req.params.email,
    }).sort({
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

    const { bookingStatus, paymentStatus } = req.body;

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    if (bookingStatus) {
      booking.bookingStatus = bookingStatus;
    }

    if (paymentStatus) {
      booking.paymentStatus = paymentStatus;
    }

    await booking.save();

    res.json({
      success: true,
      message: "Booking updated successfully",
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
  getBookingHistory,
  updateBookingStatus,
};
