const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const Payment = require("../models/Payment");

// =======================
// Create uploads folder if it doesn't exist
// =======================

const uploadDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// =======================
// Multer Storage
// =======================

const fs = require("fs");
const path = require("path");

const uploadDir = path.join(__dirname, "../uploads");

// Create uploads folder automatically if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
});

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
    console.error("GET PAYMENT ERROR");
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

router.post("/", (req, res, next) => next(), async (req, res) => {
  try {
    console.log("======= PAYMENT REQUEST =======");
    console.log(req.body);

    const payment = new Payment({
      bookingId: req.body.bookingId || null,

      customerName: req.body.customerName,

      email: req.body.email,

      phone: req.body.phone,

      amount: req.body.amount,

      transactionId: req.body.transactionId,

      paymentMethod: req.body.paymentMethod,
screenshot: "",
      

      status: "Pending Verification",
    });

    await payment.save();

    res.status(201).json({
      success: true,
      payment,
    });
  } catch (error) {
    console.error("======= PAYMENT ERROR =======");
    console.error(error);
    console.error(error.stack);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;