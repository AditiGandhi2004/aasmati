const express = require("express");
const router = express.Router();
const multer = require("multer");

const Payment = require("../models/Payment");

// =======================
// Multer Storage
// =======================

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() + "-" + file.originalname
    );
  },
});

const upload = multer({
  storage,
});

// =======================
// Save Payment
// =======================

router.post(
  "/",
  upload.single("screenshot"),

  async (req, res) => {
    try {
      const payment = new Payment({
        bookingId: req.body.bookingId,

        customerName: req.body.customerName,

        email: req.body.email,

        phone: req.body.phone,

        amount: req.body.amount,

        transactionId: req.body.transactionId,

        paymentMethod: req.body.paymentMethod,

        screenshot: req.file
          ? req.file.filename
          : "",

        status: "Pending Verification",
      });

      await payment.save();

      res.status(201).json({
        success: true,
        message:
          "Payment submitted successfully. Waiting for verification.",
        payment,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  }
);

module.exports = router;