import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Payment() {
  const location = useLocation();

  const booking = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [transactionId, setTransactionId] = useState("");
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);

  const totalAmount = booking.total || 0;

  const copyUPI = () => {
    navigator.clipboard.writeText("9425258240@axisbank");
    alert("UPI ID Copied Successfully");
  };

  const copyBankDetails = () => {
    const details = `
Account Holder : MOHAN LAL MARKAM
Bank : Axis Bank Ltd.
Account Number : 924030069204
IFSC : UTIB0003342
Branch : Kondagaon
`;

    navigator.clipboard.writeText(details);
    alert("Bank Details Copied Successfully");
  };

 const handleSubmit = async () => {
  if (!transactionId.trim()) {
    alert("Please enter Transaction ID");
    return;
  }

  const formData = new FormData();

  formData.append("bookingId", booking.booking?._id || "");

  formData.append("customerName", booking.booking?.customerName || "");
formData.append("email", booking.booking?.email || "");
formData.append("phone", booking.booking?.phone || "");

  formData.append("amount", booking.total);

  formData.append("transactionId", transactionId);

  formData.append("paymentMethod", paymentMethod);

  if (paymentScreenshot) {
    formData.append("screenshot", paymentScreenshot);
  }

  try {
    const response = await fetch(
      "https://hotel-asmati-backend.onrender.com/api/payments",
      {
        method: "POST",
        body: formData,
      }
    );

    const text = await response.text();
console.log("Server Response:", text);

if (!response.ok) {
  alert("Backend Error:\n" + text);
  return;
}

const data = JSON.parse(text);

alert("Payment submitted successfully!");
  } catch (error) {
    console.log(error);

    alert("Server Error");
  }
};

  return (
    <div className="min-h-screen bg-black text-white">

  <Navbar />

  <div className="max-w-5xl mx-auto pt-32 pb-20 px-6">

    <h1 className="text-5xl font-bold text-center text-yellow-400">
      Complete Your Payment
    </h1>

    <p className="text-center text-zinc-400 mt-3">
      Secure your booking by completing the payment.
    </p>

    <div className="bg-zinc-900 rounded-3xl p-10 mt-10 border border-yellow-500">

      {/* Amount */}

      <div className="text-center">

        <h2 className="text-xl text-zinc-400">
          Amount Payable
        </h2>

        <h1 className="text-6xl font-bold text-yellow-400 mt-3">
          ₹{totalAmount}
        </h1>

      </div>

      {/* Booking Summary */}

      <div className="mt-10 bg-black rounded-2xl border border-yellow-500 p-6">

        <h2 className="text-2xl font-bold text-yellow-400 mb-6">
          Booking Summary
        </h2>

     <div className="space-y-4">

  <div className="flex justify-between">
    <span>Guest Name</span>
    <span>{booking.booking?.customerName}</span>
  </div>

  <div className="flex justify-between">
    <span>Email</span>
    <span>{booking.booking?.email}</span>
  </div>

  <div className="flex justify-between">
    <span>Phone</span>
    <span>{booking.booking?.phone}</span>
  </div>

          <div className="flex justify-between">
            <span>Check-In</span>
            <span>
              {booking.checkIn
                ? new Date(booking.checkIn).toDateString()
                : "-"}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Check-Out</span>
            <span>
              {booking.checkOut
                ? new Date(booking.checkOut).toDateString()
                : "-"}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Total Nights</span>
            <span>{booking.days}</span>
          </div>

          <div className="border-t border-zinc-700 pt-4 flex justify-between text-xl font-bold text-yellow-400">

            <span>Total Amount</span>

            <span>₹{booking.total}</span>

          </div>

        </div>

      </div>

      {/* Payment Method */}

      <div className="mt-12">

        <h2 className="text-3xl font-bold text-yellow-400 mb-8">

          Choose Payment Method

        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* UPI */}

          <div
            onClick={() => setPaymentMethod("upi")}
            className={`cursor-pointer rounded-2xl p-6 transition border ${
              paymentMethod === "upi"
                ? "border-yellow-500 bg-yellow-500/10"
                : "border-zinc-700 bg-black"
            }`}
          >

            <h2 className="text-2xl font-bold">
              📱 UPI Payment
            </h2>

            <p className="text-zinc-400 mt-4">
              Scan QR Code using Google Pay,
              PhonePe, Paytm or any UPI App.
            </p>

          </div>

          {/* Bank */}

          <div
            onClick={() => setPaymentMethod("bank")}
            className={`cursor-pointer rounded-2xl p-6 transition border ${
              paymentMethod === "bank"
                ? "border-yellow-500 bg-yellow-500/10"
                : "border-zinc-700 bg-black"
            }`}
          >

            <h2 className="text-2xl font-bold">
              🏦 Bank Transfer
            </h2>

            <p className="text-zinc-400 mt-4">
              Direct bank account transfer.
            </p>

          </div>

          {/* Card */}

          <div className="rounded-2xl border border-zinc-700 bg-black p-6">

            <h2 className="text-2xl font-bold">
              💳 Debit / Credit Card
            </h2>

            <p className="text-zinc-400 mt-4">
              Please contact reception to complete
              your payment.
            </p>

            <a
              href="tel:+919425258240"
              className="inline-block mt-6 bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold"
            >
              📞 Call Reception
            </a>

          </div>

          {/* Net Banking */}

          <div className="rounded-2xl border border-zinc-700 bg-black p-6">

            <h2 className="text-2xl font-bold">
              🌐 Net Banking
            </h2>

            <p className="text-zinc-400 mt-4">
              Please contact reception to complete
              your payment.
            </p>

            <a
              href="tel:+919425258240"
              className="inline-block mt-6 bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold"
            >
              📞 Call Reception
            </a>

          </div>

        </div>

      </div>
            {/* UPI Section */}

      {paymentMethod === "upi" && (

        <div className="mt-12">

          <div className="bg-black rounded-3xl border border-yellow-500 p-8 text-center">

            <h2 className="text-3xl font-bold text-yellow-400 mb-8">
              Scan & Pay
            </h2>

            <img
              src="/qr-code.png"
              alt="QR Code"
              className="w-72 h-72 mx-auto bg-white p-3 rounded-2xl"
            />

            <p className="mt-6 text-zinc-400">
              Scan this QR Code using Google Pay,
              PhonePe, Paytm or any UPI App
            </p>

            <div className="mt-8">

              <p className="text-zinc-400">
                UPI ID
              </p>

              <div className="flex justify-center items-center gap-4 mt-4">

                <h2 className="text-2xl font-bold text-yellow-400">
                  9425258240@axisbank
                </h2>

                <button
                  onClick={copyUPI}
                  className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400"
                >
                  Copy
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* Bank Transfer */}

      {paymentMethod === "bank" && (

        <div className="mt-12">

          <div className="bg-black rounded-3xl border border-yellow-500 p-8">

            <h2 className="text-3xl font-bold text-yellow-400 mb-8">
              Bank Transfer Details
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between">
                <span>Account Holder</span>
                <span>MOHAN LAL MARKAM</span>
              </div>

              <div className="flex justify-between">
                <span>Bank</span>
                <span>Axis Bank Ltd.</span>
              </div>

              <div className="flex justify-between">
                <span>Account Number</span>
                <span>XXXXXXXX9204</span>
              </div>

              <div className="flex justify-between">
                <span>IFSC</span>
                <span>UTIB0003342</span>
              </div>

              <div className="flex justify-between">
                <span>Branch</span>
                <span>Kondagaon</span>
              </div>

            </div>

            <button
              onClick={copyBankDetails}
              className="mt-8 w-full bg-yellow-500 text-black py-3 rounded-xl font-bold hover:bg-yellow-400"
            >
              Copy Bank Details
            </button>

          </div>

        </div>

      )}

      {/* Transaction */}

      <div className="mt-12">

        <label className="block text-lg text-yellow-400 mb-3">
          Transaction ID
        </label>

        <input
          type="text"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          placeholder="Enter UPI / Bank Transaction ID"
          className="w-full p-4 rounded-xl bg-black border border-yellow-500 outline-none"
        />

      </div>

      {/* Screenshot */}

      <div className="mt-8">

        <label className="block text-lg text-yellow-400 mb-3">
          Upload Payment Screenshot
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPaymentScreenshot(e.target.files[0])}
          className="w-full bg-black border border-yellow-500 rounded-xl p-4"
        />

      </div>

      {/* Submit */}

      <button
        onClick={handleSubmit}
        className="w-full mt-12 bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-xl text-xl font-bold transition"
      >
        Submit Payment
      </button>

    </div>

  </div>

  <Footer />

</div>
  )
}