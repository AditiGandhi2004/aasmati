import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Stays() {
  const navigate =
    useNavigate();

  const stays = [
    {
      title:
        "Luxury Standard Room",
      image: "/stays1.jpg",
      desc:
        "Elegant comfort for a peaceful stay.",
    },
    {
      title:
        "Premium Deluxe Room",
      image: "/rooms/deluxe.jpg",
      desc:
        "Spacious luxury with premium interiors.",
    },
    {
      title:
        "Royal Suite Room",
      image: "/rooms/stays3.jpg",
      desc:
        "A luxurious royal experience.",
    },
    {
      title:
        "Banquet Hall",
      image: "/rooms/banquet.jpg",
      desc:
        "Perfect venue for weddings and events.",
    },
    {
      title:
        "Outdoor Lawn Area",
      image: "/rooms/lawn.jpg",
      desc:
        "Beautiful outdoor celebrations.",
    },
    {
      title:
        "Sun Hall",
      image: "/rooms/lawn.jpg",
      desc:
        "Celebrations.",
    },
    
    
   
    
    
   
    
  ];

  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <div className="pt-32 px-5 pb-20 max-w-7xl mx-auto">

        {/* Back */}
        <button
          onClick={() =>
            navigate(-1)
          }
          className="text-yellow-400 mb-8"
        >
          ← Back
        </button>

        {/* Heading */}
        <div className="text-center mb-14">

          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400">
            Luxury Stays
          </h1>

          <p className="text-zinc-400 mt-4 text-lg">
            Discover elegance,
            comfort & premium
            hospitality
          </p>
        </div>

        {/* Gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {stays.map(
            (
              stay,
              index
            ) => (
              <motion.div
                key={
                  index
                }
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                }}
                className="bg-zinc-900 rounded-[35px] overflow-hidden border border-zinc-700 hover:border-yellow-500 transition duration-300 shadow-lg"
              >
                {/* Image */}
                <div className="overflow-hidden">

                  <img
                    src={
                      stay.image
                    }
                    alt={
                      stay.title
                    }
                    className="w-full h-[280px] object-cover hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6">

                  <h2 className="text-2xl font-bold text-yellow-400">
                    {
                      stay.title
                    }
                  </h2>

                  <p className="text-zinc-400 mt-3">
                    {
                      stay.desc
                    }
                  </p>

                  <button
                    onClick={() =>
                      navigate(
                        "/booking"
                      )
                    }
                    className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}