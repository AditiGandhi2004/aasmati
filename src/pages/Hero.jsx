import { useEffect, useState } from "react";
import { CalendarDays, Users, BedDouble } from "lucide-react";
import { useNavigate } from "react-router-dom";

const slides = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
  "/hero/hero4.jpg",
];

export default function Hero() {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);

  const today = new Date();

  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const formatDate = (date) =>
    date.toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(formatDate(today));

  const [checkOut, setCheckOut] = useState(formatDate(tomorrow));

  const [adults, setAdults] = useState(2);

  const [children, setChildren] = useState(0);

  const [rooms, setRooms] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const searchRooms = () => {
    navigate("/booking", {
      state: {
        checkIn,
        checkOut,
        adults,
        children,
        rooms,
      },
    });
  };

  return (
    <section className="relative h-screen overflow-hidden">
              {/* Background Images */}

      {slides.map((image, index) => (

        <img
          key={index}
          src={image}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms]
          ${
            currentSlide === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
        />

      ))}

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/55"></div>

      {/* Hero Content */}

      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-5">

        <p className="tracking-[8px] uppercase text-yellow-400 text-sm mb-5">
          Since 1977
        </p>

        <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
          Hotel
          <br />
          Asmati
        </h1>

        <p className="text-gray-200 max-w-3xl mt-8 text-lg md:text-xl leading-8">

          Experience premium hospitality,
          luxurious rooms,
          exceptional dining,
          banquet facilities,
          lush green lawn,
          and unforgettable memories
          in the heart of Kondagaon.

        </p>

        <div className="flex gap-6 mt-12">

          <button
            onClick={() => navigate("/booking")}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold transition duration-300"
          >
            Book Now
          </button>

          <button
            onClick={() => navigate("/stays")}
            className="border border-white px-10 py-4 rounded-full text-white hover:bg-white hover:text-black transition duration-300"
          >
            Explore Rooms
          </button>

        </div>
                {/* Booking Search */}

        <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 w-[95%] lg:w-[90%] max-w-7xl">

          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-6">

              <div>

                <label className="font-semibold flex items-center gap-2 mb-2">

                  <CalendarDays size={18} />

                  Check In

                </label>

                <input
                  type="date"
                  className="w-full border rounded-xl p-3"
                  value={checkIn}
                  onChange={(e) =>
                    setCheckIn(e.target.value)
                  }
                />

              </div>

              <div>

                <label className="font-semibold flex items-center gap-2 mb-2">

                  <CalendarDays size={18} />

                  Check Out

                </label>

                <input
                  type="date"
                  className="w-full border rounded-xl p-3"
                  value={checkOut}
                  onChange={(e) =>
                    setCheckOut(e.target.value)
                  }
                />

              </div>
                <div>

                <label className="font-semibold flex items-center gap-2 mb-2">

                  <Users size={18} />

                  Adults

                </label>

                <select
                  value={adults}
                  onChange={(e) =>
                    setAdults(Number(e.target.value))
                  }
                  className="w-full border rounded-xl p-3"
                >
                  {[1,2,3,4,5,6,7,8].map((n)=>(
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>

              </div>

              <div>

                <label className="font-semibold flex items-center gap-2 mb-2">

                  <Users size={18} />

                  Children

                </label>

                <select
                  value={children}
                  onChange={(e)=>
                    setChildren(Number(e.target.value))
                  }
                  className="w-full border rounded-xl p-3"
                >
                  {[0,1,2,3,4,5].map((n)=>(
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>

              </div>

              <div>

                <label className="font-semibold flex items-center gap-2 mb-2">

                  <BedDouble size={18} />

                  Rooms

                </label>

                <select
                  value={rooms}
                  onChange={(e)=>
                    setRooms(Number(e.target.value))
                  }
                  className="w-full border rounded-xl p-3"
                >
                  {[1,2,3,4,5].map((n)=>(
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>

              </div>

              <div className="flex items-end">

                <button
                  onClick={searchRooms}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-bold py-4 rounded-xl hover:scale-105 transition duration-300 shadow-lg"
                >
                  Search Rooms
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Live Availability */}

      <div className="absolute top-28 right-5 md:right-10 z-20">

        <div className="bg-black/70 backdrop-blur-lg rounded-3xl p-6 border border-yellow-500/30 w-72">

          <h2 className="text-yellow-400 text-xl font-bold mb-5">
            Today's Availability
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between items-center">

              <span className="text-white">
                Standard Room
              </span>

              <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-semibold">
                8 Left
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="text-white">
                Deluxe Room
              </span>

              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                4 Left
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="text-white">
                Suite Room
              </span>

              <span className="bg-red-500 px-3 py-1 rounded-full text-sm font-semibold">
                1 Left
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="text-white">
                Banquet Hall
              </span>

              <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-semibold">
                Available
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="text-white">
                Lawn Area
              </span>

              <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-semibold">
                Available
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center z-20 animate-bounce">

        <p className="text-white text-sm tracking-[3px] mb-2">
          SCROLL
        </p>

        <div className="w-[2px] h-10 bg-yellow-400 mx-auto rounded-full"></div>

      </div>

    </section>
  );
}