const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    rooms: [
      {
        roomName: String,
        quantity: Number,
        price: Number,
      },
    ],

    checkIn: Date,

    checkOut: Date,

    totalAmount: Number,

    paymentStatus: {
      type: String,
      default: "Pending",
    },

    bookingStatus: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);