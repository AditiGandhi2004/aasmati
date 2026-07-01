import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function BookingSummary() {
  const location =
    useLocation();

  const navigate =
    useNavigate();

  const booking =
    location.state;

  if (!booking) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        <h1 className="text-3xl text-red-500">
          No Booking Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">

      <Navbar />

      <div className="max-w-5xl mx-auto px-5 pt-32 pb-20">

        {/* Back Button */}
        <button
          onClick={() =>
            navigate(-1)
          }
          className="text-yellow-400 mb-8 hover:underline"
        >
          ← Back
        </button>

        {/* Heading */}
        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-yellow-400">
            Booking Summary
          </h1>

          <p className="text-zinc-400 mt-3">
            Review your booking
            before payment
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 shadow-2xl">

          {/* Dates */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">

            <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-700">
              <p className="text-zinc-400">
                Check In
              </p>

              <h2 className="text-xl font-bold text-yellow-400 mt-2">
                {
                  booking.checkIn
                }
              </h2>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-700">
              <p className="text-zinc-400">
                Check Out
              </p>

              <h2 className="text-xl font-bold text-yellow-400 mt-2">
                {
                  booking.checkOut
                }
              </h2>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-700">
              <p className="text-zinc-400">
                Nights
              </p>

              <h2 className="text-xl font-bold text-yellow-400 mt-2">
                {
                  booking.days
                }{" "}
                Night(s)
              </h2>
            </div>
          </div>

          {/* Rooms */}
          <div>

            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Selected Rooms
            </h2>

            <div className="space-y-5">

              {booking.rooms.map(
                (room) => (
                  <div
                    key={
                      room.name
                    }
                    className="bg-zinc-900 rounded-2xl p-5 border border-zinc-700 flex justify-between items-center"
                  >
                    <div>
                      <h3 className="text-xl font-bold">
                        {
                          room.name
                        }
                      </h3>

                      <p className="text-zinc-400 mt-1">
                        ₹
                        {
                          room.price
                        }
                        {" × "}
                        {
                          room.quantity
                        }
                        {" room(s) × "}
                        {
                          booking.days
                        }
                        {" night(s)"}
                      </p>
                    </div>

                    <h2 className="text-2xl font-bold text-yellow-400">
                      ₹
                      {room.price *
                        room.quantity *
                        booking.days}
                    </h2>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Bill */}
          <div className="mt-12 border-t border-zinc-700 pt-8 space-y-4">

            <div className="flex justify-between text-lg">
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

            <div className="flex justify-between text-lg">
              <span>
                GST (18%)
              </span>

              <span>
                ₹
                {
                  booking.gst
                }
              </span>
            </div>

            <div className="flex justify-between text-3xl font-bold text-yellow-400 pt-3">
              <span>
                Total Payable
              </span>

              <span>
                ₹
                {
                  booking.total
                }
              </span>
            </div>
          </div>

          {/* Payment Button */}
          <button
            onClick={() =>
              navigate(
                "/payment",
                {
                  state:
                    booking,
                }
              )
            }
            className="w-full mt-10 bg-yellow-500 text-black py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}