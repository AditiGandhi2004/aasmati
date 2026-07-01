import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Help() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto pt-32 px-5 pb-20">

        <h1 className="text-5xl font-bold text-center text-yellow-400">
          Need Help?
        </h1>

        <p className="text-center text-zinc-400 mt-4">
          We're here to assist you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-700">
            <h2 className="text-2xl font-bold text-yellow-400">
              Booking Support
            </h2>

            <p className="text-zinc-400 mt-4">
              
            </p>

            <p className="text-2xl mt-2">
              📞 9203576310
            </p>
          </div>

          
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-700">
            <h2 className="text-2xl font-bold text-yellow-400">
              Email
            </h2>

            <p className="text-2xl mt-4">
              ✉️ hotelasmati@gmail.com
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-700">
            <h2 className="text-2xl font-bold text-yellow-400">
              Address
            </h2>

            <p className="text-zinc-400 mt-4 leading-8">
              Mardapal Road,
              Near Forest Garden,
              Kondagaon 494226,
              Distt.-Kondagaon (C.G.)
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}