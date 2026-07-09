import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/hotel.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-yellow-400">
            Hotel Aasmati
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Experience luxury, elegance and comfort with premium hospitality,
            beautiful rooms, delicious dining and unforgettable memories.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <button
              onClick={() => navigate("/booking")}
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition"
            >
              Book Now
            </button>

            <button
              onClick={() => navigate("/stays")}
              className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-xl font-bold text-lg transition"
            >
              Explore Rooms
            </button>

          </div>

        </motion.div>

      </section>

      {/* About Section */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <motion.img
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="/hotel.jpg"
            alt="Hotel"
            className="rounded-3xl shadow-2xl"
          />

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h2 className="text-5xl font-bold text-yellow-400">
              Luxury Stay in Kondagaon
            </h2>

            <p className="mt-8 text-gray-300 text-lg leading-9">
              Hotel Aasmati Corporation provides premium accommodation,
              banquet halls, restaurant facilities, beautiful lawn areas,
              family rooms, deluxe suites and exceptional hospitality for
              tourists, business travellers and wedding events.
            </p>

            <button
              onClick={() => navigate("/booking")}
              className="mt-8 bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold"
            >
              Reserve Your Stay
            </button>

          </motion.div>

        </div>

      </section>

      {/* Premium Services */}

      <section className="bg-zinc-950 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-5xl font-bold text-yellow-400">
              Our Premium Services
            </h2>

            <p className="mt-5 text-gray-400">
              Everything you need for a luxurious stay.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            {[
              {
                title: "Luxury Rooms",
                icon: "🛏️"
              },
              {
                title: "Restaurant(Opening soon)",
                icon: "🍽️"
              },
              {
                title: "Banquet Hall",
                icon: "🎉"
              },
              {
                title: "Wedding Lawn",
                icon: "🌳"
              },
              {
                title: "24×7 Reception",
                icon: "🛎️"
              },
              {
                title: "Secure Parking",
                icon: "🚗"
              }
            ].map((item) => (

              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="bg-zinc-900 rounded-3xl p-8 text-center border border-zinc-800 hover:border-yellow-500"
              >

                <div className="text-6xl">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-yellow-400 mt-6">
                  {item.title}
                </h3>

                <p className="mt-5 text-gray-400">
                  Premium hospitality with world-class comfort and service.
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
            {/* Featured Rooms */}

      <section className="py-24 bg-black">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-5xl font-bold text-yellow-400">
              Featured Rooms
            </h2>

            <p className="mt-5 text-gray-400">
              Elegant rooms designed for every type of traveller.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            {[
              {
                name: "Standard Room",
                image: "/rooms/standard.jpg",
                price: 1500,
                
              },
              {
                name: "Deluxe Room",
                image: "rooms/deluxe.jpg",
                price: 2000,
                
              },
              {
                name: "Luxury Suite",
                image: "rooms/suite.jpg",
                price: 3000,
                
              }
            ].map((room) => (

              <motion.div
                key={room.name}
                whileHover={{ y: -12 }}
                className="overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-yellow-500 transition duration-300 shadow-xl"
              >

                <img
                  src={room.image}
                  alt={room.name}
                  className="h-72 w-full object-cover hover:scale-110 duration-500"
                />

                <div className="p-7">

                  <h3 className="text-3xl font-bold text-yellow-400">
                    {room.name}
                  </h3>

                  <div className="mt-5 space-y-2 text-gray-300">

                   

                  </div>

                  <div className="mt-6 flex items-center justify-between">

                    <div>

                      <p className="text-gray-400">
                        Starting From
                      </p>

                      <h2 className="text-3xl font-bold text-yellow-400">

                        ₹{room.price}

                      </h2>

                      <p className="text-gray-500">
                        per night
                      </p>

                    </div>

                    <button
                      onClick={() => navigate("/booking")}
                      className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold"
                    >
                      Book
                    </button>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      
            {/* Luxury Amenities */}

      <section className="py-24 bg-black">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-5xl font-bold text-yellow-400">
              Luxury Amenities
            </h2>

            <p className="mt-5 text-gray-400">
              Everything you need for a luxurious and comfortable stay.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              {
                icon: "🛏️",
                title: "Luxury Rooms",
                desc: "Spacious premium rooms with modern interiors."
              },
              {
                icon: "📶",
                title: "Free WiFi",
                desc: "High-speed internet throughout the hotel."
              },
              {
                icon: "🍽️",
                title: "Restaurant",
                desc: "Opening soon. Multi-cuisine restaurant with delicious food."
              },
              {
                icon: "🚗",
                title: "Parking",
                desc: "Large and secure parking area."
              },
              {
                icon: "🛎️",
                title: "24×7 Reception",
                desc: "Opening soon.Friendly staff available all day."
              },
              {
                icon: "🎉",
                title: "Banquet Hall",
                desc: "Perfect for weddings and corporate events."
              },
              {
                icon: "🌳",
                title: "Wedding Lawn",
                desc: "Beautiful outdoor venue for celebrations."
              },
              {
                icon: "📹",
                title: "CCTV Security",
                desc: "Complete safety and surveillance."
              }
            ].map((item) => (

              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-yellow-500 transition"
              >

                <div className="text-6xl text-center">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-yellow-400 text-center mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-5 text-center">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Banquet & Lawn */}

      <section className="py-24 bg-zinc-950">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900 rounded-3xl overflow-hidden shadow-xl"
          >

            <img
              src="/rooms/banquet.jpg"
              alt="Banquet"
              className="h-80 w-full object-cover"
            />

            <div className="p-8">

              <h2 className="text-4xl font-bold text-yellow-400">
                Grand Banquet Hall
              </h2>

              <p className="mt-5 text-gray-400 leading-8">
                Celebrate weddings, birthdays, receptions,
                conferences and corporate events in our
                fully air-conditioned banquet hall with
                premium decoration services.
              </p>

              <button
                onClick={() => navigate("/booking")}
                className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold"
              >
                Book Banquet
              </button>

            </div>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900 rounded-3xl overflow-hidden shadow-xl"
          >

            <img
              src="/rooms/lawn.jpg"
              alt="Lawn"
              className="h-80 w-full object-cover"
            />

            <div className="p-8">

              <h2 className="text-4xl font-bold text-yellow-400">
                Wedding Lawn
              </h2>

              <p className="mt-5 text-gray-400 leading-8">
                Beautiful green lawn suitable for outdoor
                weddings, parties, family gatherings,
                musical nights and grand celebrations.
              </p>

              <button
                onClick={() => navigate("/booking")}
                className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold"
              >
                Book Lawn
              </button>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Guest Testimonials */}

      <section className="py-24 bg-black">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-5xl font-bold text-yellow-400">
              Guest Reviews
            </h2>

            <p className="mt-5 text-gray-400">
              What our guests say about Hotel Asmati Corporation
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                name: "Rahul Sharma",
                review: "Amazing rooms, delicious food and excellent hospitality."
              },
              {
                name: "Priya Verma",
                review: "Perfect venue for weddings. Everything was beautifully managed."
              },
              {
                name: "Amit Patel",
                review: "One of the best hotels in Kondagaon. Highly recommended."
              }
            ].map((guest) => (

              <motion.div
                key={guest.name}
                whileHover={{ y: -8 }}
                className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-yellow-500"
              >

                <div className="text-yellow-400 text-3xl">
                  ★★★★★
                </div>

                <p className="mt-6 text-gray-300 leading-8">
                  "{guest.review}"
                </p>

                <h3 className="mt-8 text-xl font-bold text-yellow-400">
                  {guest.name}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
            {/* Restaurant */}

      <section className="py-24 bg-zinc-950">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <img
              src="/hotel.jpg"
              alt="Restaurant"
              className="rounded-3xl shadow-2xl"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-5xl font-bold text-yellow-400">

              Fine Dining Restaurant

            </h2>

            <p className="mt-8 text-gray-300 leading-8 text-lg">

              Enjoy authentic Indian, Chinese and Continental cuisine
              prepared by experienced chefs. Whether it's breakfast,
              lunch or dinner, our restaurant offers a memorable
              dining experience.

            </p>

            <button
              onClick={() => navigate("/booking")}
              className="mt-8 bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition"
            >
              Opening soon
            </button>

          </motion.div>

        </div>

      </section>

      {/* Special Offers */}

      <section className="py-24 bg-black">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-[40px] p-16 text-center text-black">

            <h2 className="text-5xl font-bold">

              Special Offer

            </h2>

            <p className="mt-6 text-xl">

              Book 3 Nights & Get 15% OFF on your stay.

            </p>

            <button
              onClick={() => navigate("/booking")}
              className="mt-10 bg-black text-yellow-400 px-10 py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              Claim Offer
            </button>

          </div>

        </div>

      </section>

      {/* Instagram */}

      <section className="py-24 bg-zinc-950">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-yellow-400">

            Follow Us

          </h2>

          <p className="mt-5 text-gray-400">

            Stay connected with Hotel Asmati Corporation.

          </p>

          <a
            href="https://www.instagram.com/hotel_asmati_corporation/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 text-pink-500 text-2xl font-bold hover:underline"
          >
            @hotel_asmati_corporation
          </a>

        </div>

      </section>

      {/* Final CTA */}

      <section className="py-24 bg-black">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-zinc-900 rounded-[40px] p-16 text-center border border-yellow-500">

            <h2 className="text-6xl font-bold text-yellow-400">

              Ready For Your Stay?

            </h2>

            <p className="mt-8 text-xl text-gray-300">

              Book today and enjoy premium hospitality,
              luxury rooms and unforgettable memories.

            </p>

            <button
              onClick={() => navigate("/booking")}
              className="mt-10 bg-yellow-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition"
            >
              Book Your Stay
            </button>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}