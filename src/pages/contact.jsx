import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-black min-h-screen text-white">

      <Navbar />

      <div className="pt-32 px-6 pb-20">

        <h1 className="text-5xl text-center font-bold text-yellow-400">
          Contact Us
        </h1>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 mt-16">

          <div className="bg-zinc-900 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Hotel Aasmati Corporation
            </h2>

            <div className="space-y-8">

              <div className="flex gap-5">

                <Phone className="text-yellow-400" />

                <div>
                  <h3 className="font-semibold">
                    Booking Contact
                  </h3>

                  
                  <p>Hotel Aasmati</p>

                  <p>9203576310</p>

                </div>

              </div>

              <div className="flex gap-5">

                <Mail className="text-yellow-400" />

                <div>

                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p>hotelasmati@gmail.com</p>

                </div>

              </div>

              <div className="flex gap-5">

                <MapPin className="text-yellow-400" />

                <div>

                  <h3 className="font-semibold">
                    Address
                  </h3>

                  <p>
                    Mardapal Road,
                    Near Forest Garden,
                    Kondagaon 494226,
                    Distt.-Kondagaon (C.G.)
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div>

            <iframe
              title="Hotel Map"
              className="rounded-3xl w-full h-[500px]"
              src="https://maps.google.com/maps?q=Kondagaon&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}