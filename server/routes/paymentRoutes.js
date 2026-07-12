const express = require("express");
const router = express.Router();

const Payment = require("../models/Payment");

// =======================
// Get All Payments
// =======================

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

// =======================
// Save Payment
// =======================

router.post("/", async (req, res) => {
  try {
    const payment = new Payment({
      bookingId: req.body.bookingId,

      customerName: req.body.customerName,

      email: req.body.email,

      phone: req.body.phone,

      amount: req.body.amount,

      transactionId: req.body.transactionId,

      paymentMethod: req.body.paymentMethod,

      status: "Pending Verification",
    });

    await payment.save();

    res.status(201).json({
      success: true,
      message: "Payment submitted successfully.",
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