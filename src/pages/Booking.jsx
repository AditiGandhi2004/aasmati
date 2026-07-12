import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../components/Footer";
export default function Booking() {
  const navigate = useNavigate();

  const [checkIn, setCheckIn] =
    useState(null);

  const [checkOut, setCheckOut] =
  useState(null);

const [customerName, setCustomerName] =
  useState("");

const [email, setEmail] =
  useState("");

const [phone, setPhone] =
  useState("");

  const [rooms, setRooms] = useState([
    {
      name: "Standard Room",
      price: 1500,
      desc: "Comfortable stay",
      quantity: 0,
    },
    {
      name: "Deluxe Room",
      price: 2000,
      desc: "Luxury comfort",
      quantity: 0,
    },
    {
      name: "Suite Room",
      price: 3000,
      desc: "Royal experience",
      quantity: 0,
    },
    {
      name: "Banquet Hall",
      price: 11000,
      desc:
        "For weddings & events",
      quantity: 0,
    },
    {
      name: "Sun Hall",
      price: 3000,
      desc:
        "Celebrations",
      quantity: 0,
    },
    {
      name: "Lawn Area",
      price: 11000,
      desc:
        "Outdoor celebrations",
      quantity: 0,
    },
  ]);

  const updateQuantity = (
    index,
    type
  ) => {
    const updatedRooms = [
      ...rooms,
    ];

    if (type === "increase") {
      updatedRooms[
        index
      ].quantity += 1;
    } else {
      if (
        updatedRooms[index]
          .quantity > 0
      ) {
        updatedRooms[
          index
        ].quantity -= 1;
      }
    }

    setRooms(updatedRooms);
  };

  const days =
    checkIn && checkOut
      ? Math.ceil(
          (checkOut -
            checkIn) /
            (1000 *
              60 *
              60 *
              24)
        )
      : 0;

  const subtotal = rooms.reduce(
    (acc, room) =>
      acc +
      room.price *
        room.quantity *
        (days || 1),
    0
  );

  const gst = Math.floor(
    subtotal * 0.05
  );

  const total =
    subtotal + gst;


          const handleSubmit = async () => {
  const selectedRooms = rooms.filter(
    (room) => room.quantity > 0
  );

  if (selectedRooms.length === 0) {
    alert("Please select at least one room");
    return;
  }

  if (!customerName || !email || !phone) {
    alert("Please fill all customer details");
    return;
  }

  if (!checkIn || !checkOut) {
    alert("Please select dates");
    return;
  }

  try {
    const response = await fetch(

`${import.meta.env.VITE_API_URL}/api/bookings`,
      {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName,
          email,
          phone,

          rooms: selectedRooms.map((room) => ({
            roomName: room.name,
            quantity: room.quantity,
            price: room.price,
          })),

          checkIn,
          checkOut,
          totalAmount: total,
        }),
      }
    );
const data = await response.json();

if (data.success) {
  navigate("/payment", {
    state: {
      booking: data.booking,   // <-- this is the MongoDB booking document

      customerName,
      email,
      phone,

      rooms: selectedRooms,

      checkIn,
      checkOut,

      days,
      subtotal,
      gst,
      total,
    },
  });
}
    else {
      alert("Booking Failed");
    }
  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
};
    

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto pt-32 px-5 pb-20">

        <button
          onClick={() =>
            navigate(-1)
          }
          className="text-yellow-400 mb-8"
        >
          ← Back
        </button>

        <h1 className="text-5xl text-center font-bold text-yellow-400 mb-12">
          Luxury Booking
        </h1>

        {/* Rooms */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {rooms.map(
            (room, index) => (
              <div
                key={room.name}
                className="bg-zinc-900 rounded-3xl p-6 border border-zinc-700 hover:border-yellow-500 transition"
              >
                <h2 className="text-2xl font-bold">
                  {room.name}
                </h2>

                <p className="text-zinc-400 mt-2">
                  {room.desc}
                </p>

                <p className="text-yellow-400 text-2xl mt-4 font-bold">
                  ₹{room.price}
                  /night
                </p>

                <div className="flex items-center justify-center gap-5 mt-6">

                  <button
                    onClick={() =>
                      updateQuantity(
                        index,
                        "decrease"
                      )
                    }
                    className="bg-yellow-500 text-black px-4 py-2 rounded-full"
                  >
                    -
                  </button>

                  <span className="text-3xl font-bold">
                    {
                      room.quantity
                    }
                  </span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        index,
                        "increase"
                      )
                    }
                    className="bg-yellow-500 text-black px-4 py-2 rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
            )
          )}
        </div>
        {/* Customer Details */}

<div className="bg-zinc-900 rounded-3xl p-8 mt-12 border border-zinc-700">

  <h2 className="text-3xl text-center font-bold text-yellow-400 mb-8">
    Customer Information
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div>
      <label className="block mb-2 text-yellow-400">
        Full Name
      </label>

      <input
        type="text"
        value={customerName}
        onChange={(e) =>
          setCustomerName(e.target.value)
        }
        placeholder="Enter Full Name"
        className="w-full p-4 rounded-xl bg-black border border-yellow-500 outline-none"
      />
    </div>

    <div>
      <label className="block mb-2 text-yellow-400">
        Email
      </label>

      <input
        type="email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        placeholder="Enter Email"
        className="w-full p-4 rounded-xl bg-black border border-yellow-500 outline-none"
      />
    </div>

    <div>
      <label className="block mb-2 text-yellow-400">
        Phone Number
      </label>

      <input
        type="text"
        value={phone}
        onChange={(e) =>
          setPhone(e.target.value)
        }
        placeholder="Enter Phone Number"
        className="w-full p-4 rounded-xl bg-black border border-yellow-500 outline-none"
      />
    </div>

  </div>

</div>

        {/* Dates */}
        <div className="bg-zinc-900 rounded-3xl p-8 mt-16 border border-zinc-700">

          <h2 className="text-3xl text-center text-yellow-400 font-bold mb-8">
            Select Dates
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="mb-3">
                Check In
              </p>

              <DatePicker
                selected={checkIn}
                onChange={(date) =>
                  setCheckIn(date)
                }
                minDate={new Date()}
                className="w-full p-4 rounded-xl bg-black border border-yellow-500"
              />
            </div>

            <div>
              <p className="mb-3">
                Check Out
              </p>

              <DatePicker
                selected={checkOut}
                onChange={(date) =>
                  setCheckOut(date)
                }
                minDate={
                  checkIn ||
                  new Date()
                }
                className="w-full p-4 rounded-xl bg-black border border-yellow-500"
              />
            </div>
          </div>

          {days > 0 && (
            <h2 className="text-center text-2xl text-yellow-400 mt-6">
              {days} Night(s)
            </h2>
          )}
        </div>

        {/* Bill */}
        <div className="bg-zinc-900 rounded-3xl p-8 mt-10 border border-zinc-700">

          <h2 className="text-3xl text-center text-yellow-400 font-bold mb-8">
            Price Details
          </h2>

          <div className="space-y-3 text-lg">

            <div className="flex justify-between">
              <span>
                Subtotal
              </span>
              <span>
                ₹{subtotal}
              </span>
            </div>

            <div className="flex justify-between">
              <span>
                GST (5%)
              </span>
              <span>
                ₹{gst}
              </span>
            </div>

            <div className="flex justify-between text-2xl font-bold text-yellow-400 mt-4">
              <span>
                Total
              </span>
              <span>
                ₹{total}
              </span>
            </div>
          </div>

          <button
            onClick={
              handleSubmit
            }
            className="w-full mt-8 bg-yellow-500 text-black py-4 rounded-xl font-bold text-lg"
          >
            Proceed to Summary
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
