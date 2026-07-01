import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

export default function Payment() {
  const location =
    useLocation();

  const navigate =
    useNavigate();

  const booking =
    location.state;

  const [selectedMethod,
    setSelectedMethod,
  ] = useState("");

  if (!booking) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        No Booking Found
      </div>
    );
  }

  const paymentMethods = [
    "PhonePe",
    "Google Pay",
    "Credit / Debit Card",
    "UPI",
    "Net Banking",
  ];

  const handlePayment =
    () => {
      if (
        !selectedMethod
      ) {
        alert(
          "Please select payment method"
        );
        return;
      }

      navigate(
        "/success",
        {
          state: {
            booking,
            paymentMethod:
              selectedMethod,
            bookingId:
              "ASM" +
              Math.floor(
                Math.random() *
                  100000
              ),
          },
        }
      );
    };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">

      <Navbar />

      <div className="max-w-6xl mx-auto px-5 pt-32 pb-20">

        {/* Back */}
        <button
          onClick={() =>
            navigate(-1)
          }
          className="text-yellow-400 mb-8"
        >
          ← Back
        </button>

        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-yellow-400">
            Payment
          </h1>

          <p className="text-zinc-400 mt-3">
            Complete your luxury
            booking
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}
          <div className="bg-zinc-900 rounded-[35px] p-8 border border-zinc-700">

            <h2 className="text-3xl font-bold text-yellow-400 mb-8">
              Select Payment
            </h2>

            <div className="space-y-4">

              {paymentMethods.map(
                (method) => (
                  <div
                    key={
                      method
                    }
                    onClick={() =>
                      setSelectedMethod(
                        method
                      )
                    }
                    className={`cursor-pointer p-5 rounded-2xl border transition

                    ${
                      selectedMethod ===
                      method
                        ? "border-yellow-500 bg-yellow-500/10"
                        : "border-zinc-700"
                    }`}
                  >
                    <h3 className="text-xl font-semibold">
                      {method}
                    </h3>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right */}
          <div className="bg-zinc-900 rounded-[35px] p-8 border border-zinc-700">

            <h2 className="text-3xl font-bold text-yellow-400 mb-8">
              Booking Total
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>
                  Subtotal
                </span>

                <span>
                  ₹
                  {
                    booking.subtotal
                  }
                </span>
              </div>

              <div className="flex justify-between">
                <span>
                  GST
                </span>

                <span>
                  ₹
                  {
                    booking.gst
                  }
                </span>
              </div>

              <div className="border-t border-zinc-700 pt-5 flex justify-between text-2xl font-bold text-yellow-400">
                <span>
                  Total
                </span>

                <span>
                  ₹
                  {
                    booking.total
                  }
                </span>
              </div>
            </div>

            <button
              onClick={
                handlePayment
              }
              className="w-full mt-10 bg-yellow-500 text-black py-4 rounded-2xl font-bold text-lg hover:scale-105 transition"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}