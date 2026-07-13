import { useState } from "react";

export default function BookingHistory() {
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);

  const searchBookings = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bookings/history/${email}`
      );

      const data = await response.json();

      if (data.success) {
        setBookings(data.bookings);
      } else {
        alert("No bookings found.");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-10">
        Booking History
      </h1>

      <div className="max-w-xl mx-auto flex gap-4 mb-10">

        <input
          type="email"
          placeholder="Enter your booking email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 p-4 rounded-xl bg-zinc-900 border border-yellow-500"
        />

        <button
          onClick={searchBookings}
          className="bg-yellow-500 text-black px-6 rounded-xl font-semibold hover:bg-yellow-400"
        >
          Search
        </button>

      </div>

      {bookings.length === 0 ? (
        <p className="text-center text-zinc-400">
          No bookings found.
        </p>
      ) : (
        <div className="space-y-6">

          {bookings.map((booking) => (

            <div
              key={booking._id}
              className="bg-zinc-900 border border-yellow-500 rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold mb-4">
                {booking.customerName}
              </h2>

              <p><strong>Email:</strong> {booking.email}</p>

              <p><strong>Phone:</strong> {booking.phone}</p>

              <p>
                <strong>Check In:</strong>{" "}
                {new Date(booking.checkIn).toLocaleDateString()}
              </p>

              <p>
                <strong>Check Out:</strong>{" "}
                {new Date(booking.checkOut).toLocaleDateString()}
              </p>

              <p>
                <strong>Total Amount:</strong> ₹{booking.totalAmount}
              </p>

              <p className="mt-3">
                <strong>Payment Status:</strong>{" "}
                <span className="font-bold">
                  {booking.paymentStatus}
                </span>
              </p>

              <p className="mt-2">
                <strong>Booking Status:</strong>{" "}
                <span
                  className={`font-bold ${
                    booking.bookingStatus === "Confirmed"
                      ? "text-green-400"
                      : booking.bookingStatus === "Cancelled"
                      ? "text-red-400"
                      : "text-yellow-400"
                  }`}
                >
                  {booking.bookingStatus}
                </span>
              </p>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}