const express = require("express");
const router = express.Router();

const Payment = require("../models/Payment");
const Booking = require("../models/Booking");

// =====================================
// Get All Payments
// =====================================

router.get("/", async (req, res) => {
  try {
    const payments = await Payment.find().sort({
      createdAt: -1,
    });

    res.json(payments);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// =====================================
// Save Payment
// =====================================

router.post("/", async (req, res) => {
  try {
    console.log("======= PAYMENT REQUEST =======");
    console.log(req.body);

    const paymentData = {
      customerName: req.body.customerName,
      email: req.body.email,
      phone: req.body.phone,
      amount: req.body.amount,
      transactionId: req.body.transactionId,
      paymentMethod: req.body.paymentMethod,
      status: "Pending",
    };

    if (req.body.bookingId && req.body.bookingId !== "") {
      paymentData.bookingId = req.body.bookingId;
    }

    const payment = await Payment.create(paymentData);

    res.status(201).json({
      success: true,
      payment,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// =====================================
// Update Payment Status
// =====================================

// =====================================
// Update Payment Status
// =====================================

router.put("/:id", async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    // Update payment status
    payment.status = req.body.status;

    await payment.save();

    // Update related booking
    if (payment.bookingId) {
      let paymentStatus = "Pending";
      let bookingStatus = "Pending";

      if (req.body.status === "Verified") {
        paymentStatus = "Verified";
        bookingStatus = "Confirmed";
      }

      if (req.body.status === "Rejected") {
        paymentStatus = "Rejected";
        bookingStatus = "Cancelled";
      }

      await Booking.findByIdAndUpdate(
        payment.bookingId,
        {
          paymentStatus,
          bookingStatus,
        },
        {
          new: true,
        }
      );
    }

    res.json({
      success: true,
      message: "Payment Updated",
      payment,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;