import { useEffect, useState } from "react";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/bookings`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBookings(data.bookings);
        }
      })
      .catch(console.error);
  };

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bookings/${id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      const data = await response.json();

      if (data.success) {
        loadBookings();
      } else {
        alert("Failed to update booking status.");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold text-yellow-400 mb-8">
        Booking Management
      </h1>

      <div className="overflow-x-auto rounded-2xl border border-zinc-700">

        <table className="w-full text-left">

          <thead className="bg-yellow-500 text-black">

            <tr>
              <th className="p-4">Guest</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Check In</th>
              <th className="p-4">Check Out</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
            </tr>

          </thead>

          <tbody>

            {bookings.length > 0 ? (

              bookings.map((booking) => (

                <tr
                  key={booking._id}
                  className="border-b border-zinc-700 hover:bg-zinc-900"
                >

                  <td className="p-4">
                    {booking.customerName}
                  </td>

                  <td className="p-4">
                    {booking.phone}
                  </td>

                  <td className="p-4">
                    {new Date(booking.checkIn).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    {new Date(booking.checkOut).toLocaleDateString()}
                  </td>

                  <td className="p-4 text-yellow-400 font-semibold">
                    ₹{booking.totalAmount}
                  </td>

                  <td className="p-4">

                    <select
                      value={booking.status || "Pending"}
                      onChange={(e) =>
                        updateStatus(
                          booking._id,
                          e.target.value
                        )
                      }
                      className={`px-4 py-2 rounded-lg font-semibold border outline-none
                      ${
                        booking.status === "Confirmed"
                          ? "bg-green-600 text-white"
                          : booking.status === "Cancelled"
                          ? "bg-red-600 text-white"
                          : "bg-yellow-500 text-black"
                      }`}
                    >

                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Confirmed">
                        Confirmed
                      </option>

                      <option value="Cancelled">
                        Cancelled
                      </option>

                    </select>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="6"
                  className="text-center py-10 text-zinc-400"
                >
                  No Bookings Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}