const express = require("express");
const router = express.Router();

const Payment = require("../models/Payment");
console.log("BODY RECEIVED:", req.body);
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
    console.log("======= PAYMENT REQUEST =======");
    console.log(req.body);

    const paymentData = {
      customerName: req.body.customerName,
      email: req.body.email,
      phone: req.body.phone,
      amount: req.body.amount,
      transactionId: req.body.transactionId,
      paymentMethod: req.body.paymentMethod,
      status: "Pending Verification",
    };

    // Add bookingId only if it exists
    if (
      req.body.bookingId &&
      req.body.bookingId !== ""
    ) {
      paymentData.bookingId = req.body.bookingId;
    }

    const payment = new Payment(paymentData);

    await payment.save();

    res.status(201).json({
      success: true,
      payment,
    });

  } catch (error) {
    console.error("======= PAYMENT ERROR =======");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;