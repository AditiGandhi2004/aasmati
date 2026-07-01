import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20 text-white">

      <div className="max-w-7xl mx-auto px-5 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Hotel Info */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-400">
              Hotel Aasmati
            </h2>

            <p className="text-zinc-400 mt-4 leading-7">
              Experience luxury,
              elegance and comfort
              with premium stays,
              banquet halls and
              memorable hospitality.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-5">
              Contact
            </h2>

            <div className="space-y-4">

              <div className="flex gap-3">
                <Phone
                  className="text-yellow-400 mt-1"
                  size={20}
                />

                

                <div>
                  <p className="font-semibold">
                    Hotel Aasmati
                  </p>
                  <p className="text-zinc-400">
                    9203576310
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-5">
              Address
            </h2>

            <div className="flex gap-3">
              <MapPin
                className="text-yellow-400 mt-1"
                size={20}
              />

              <p className="text-zinc-400 leading-7">
                Mardapal Road,
                Near Forest Garden,
                Kondagaon 494226,
                Distt.-Kondagaon
                (C.G.)
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-5">
              Connect
            </h2>

            <a
  href="https://www.instagram.com/hotel_asmati_corporation/"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-3 hover:text-pink-400 transition duration-300"
>
  <FaInstagram
    size={24}
    className="text-pink-500"
  />

  @hotel_asmati_corporation
</a>
              
             

            <div className="flex items-center gap-3 mt-5 text-zinc-400">
              <Mail
                size={20}
              />
              hotelasmati@gmail.com
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 mt-14 pt-8 text-center text-zinc-500">
          © 2026 Hotel Asmati
          Corporation. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}