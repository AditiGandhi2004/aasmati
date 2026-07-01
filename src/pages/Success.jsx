import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function Success() {
  const location =
    useLocation();

  const navigate =
    useNavigate();

  const data =
    location.state;

  if (!data) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        No Booking Found
      </div>
    );
  }

  const {
    booking,
    paymentMethod,
    bookingId,
  } = data;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">

      <Navbar />

      <div className="max-w-4xl mx-auto px-5 pt-32 pb-20">

        <div className="bg-zinc-900 border border-zinc-700 rounded-[40px] p-10 text-center shadow-2xl">

          {/* Success Icon */}
          <div className="w-28 h-28 bg-yellow-500 rounded-full flex items-center justify-center mx-auto text-5xl text-black font-bold">
            ✓
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold text-yellow-400 mt-8">
            Booking Confirmed!
          </h1>

          <p className="text-zinc-400 mt-4 text-lg">
            Thank you for choosing
            Hotel Asmati Corporation.
            Your luxury stay is
            successfully booked.
          </p>

          {/* Booking Details */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">

            <div className="bg-black rounded-2xl p-6 border border-zinc-800">
              <p className="text-zinc-400">
                Booking ID
              </p>

              <h2 className="text-2xl font-bold text-yellow-400 mt-2">
                {bookingId}
              </h2>
            </div>

            <div className="bg-black rounded-2xl p-6 border border-zinc-800">
              <p className="text-zinc-400">
                Payment Method
              </p>

              <h2 className="text-2xl font-bold text-yellow-400 mt-2">
                {paymentMethod}
              </h2>
            </div>

            <div className="bg-black rounded-2xl p-6 border border-zinc-800">
              <p className="text-zinc-400">
                Check In
              </p>

              <h2 className="text-xl font-bold text-yellow-400 mt-2">
                {
                  booking.checkIn
                }
              </h2>
            </div>

            <div className="bg-black rounded-2xl p-6 border border-zinc-800">
              <p className="text-zinc-400">
                Check Out
              </p>

              <h2 className="text-xl font-bold text-yellow-400 mt-2">
                {
                  booking.checkOut
                }
              </h2>
            </div>

            <div className="bg-black rounded-2xl p-6 border border-zinc-800 md:col-span-2">
              <p className="text-zinc-400">
                Total Paid
              </p>

              <h2 className="text-4xl font-bold text-yellow-400 mt-2">
                ₹
                {
                  booking.total
                }
              </h2>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12">

            <button
              onClick={() =>
                navigate("/")
              }
              className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Back To Home
            </button>

            <button
              onClick={() =>
                navigate(
                  "/booking"
                )
              }
              className="border border-yellow-500 text-yellow-400 px-8 py-4 rounded-2xl font-bold hover:bg-yellow-500 hover:text-black transition"
            >
              Book Another Stay
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}