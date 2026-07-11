const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },

    customerName: String,

    email: String,

    phone: String,

    amount: Number,

    transactionId: String,

    screenshot: String,

    paymentMethod: String,

    status: {
      type: String,
      default: "Pending Verification",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Payment", paymentSchema);