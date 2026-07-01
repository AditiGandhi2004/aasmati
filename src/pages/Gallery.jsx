import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  
];

export default function Gallery() {
  return (
    <div className="bg-black min-h-screen text-white">

      <Navbar />

      <div className="pt-32 pb-16 px-6">

        <h1 className="text-5xl font-bold text-center text-yellow-400">
          Hotel Gallery
        </h1>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          Explore the luxury of Hotel Asmati Corporation through our beautiful
          rooms, banquet hall, lawn area, restaurant and premium facilities.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">

          {images.map((img, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-yellow-500/20 hover:scale-105 transition duration-500"
            >

              <img
                src={img}
                alt=""
                className="w-full h-72 object-cover hover:scale-110 transition duration-700"
              />

            </div>

          ))}

        </div>

      </div>

      <Footer />

    </div>
  );
}