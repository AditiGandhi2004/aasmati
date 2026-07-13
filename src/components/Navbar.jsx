import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  User,
  BedDouble,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Stays",
      path: "/stays",
    },
     {
    name: "Booking History",
    path: "/history",
  },
    {
      name: "Help",
      path: "/help",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled
      ? "bg-black/90 backdrop-blur-xl shadow-lg"
      : "bg-black/30 backdrop-blur-md"
  }`}
>
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 xl:px-10 h-20">

        {/* Logo */}

        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="/logo.png"
            alt="Hotel Asmati"
            className="w-14 h-14 rounded-full object-cover border border-yellow-500 shadow-md"
          />

          <div>
            <h1 className="text-white font-bold text-2xl xl:text-3xl leading-none">
              Hotel Aasmati
            </h1>

            <p className="text-yellow-400 text-[11px] tracking-[5px]">
              CORPORATION
            </p>
          </div>
        </div>

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-10 text-lg font-medium">

          {navLinks.map((item) => (

            <Link
              key={item.path}
              to={item.path}
              className={`relative transition-all duration-300 hover:text-yellow-400 ${
                location.pathname === item.path
                  ? "text-yellow-400"
                  : "text-white"
              }`}
            >
              {item.name}

              {location.pathname === item.path && (
                <span className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-yellow-400"></span>
              )}
            </Link>

          ))}

        </nav>

        {/* Right Buttons */}

        <div className="hidden lg:flex items-center gap-5">

          <a
            href="tel:6265742422"
            className="flex items-center gap-2 text-white hover:text-yellow-400 transition"
          >
            <Phone size={18} />
            <span className="hidden xl:block">Book Now</span>
          </a>

          <button
            onClick={() => navigate("/signin")}
            className="flex items-center gap-2 border border-yellow-500 text-yellow-400 px-5 py-2 rounded-full"
          >
            <User size={18} />
            Sign In
          </button>

          <button
            onClick={() => navigate("/register")}
            className="bg-yellow-500 text-black px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Register
          </button>

          <button
            onClick={() => navigate("/booking")}
            className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
          >
            <BedDouble size={18} />
            Book Room
          </button>

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          {menuOpen ? (
            <X size={34} />
          ) : (
            <Menu size={34} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-black border-t border-yellow-500/20">

          <div className="flex flex-col px-6 py-6 gap-4">

            {navLinks.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                onClick={() =>
                  setMenuOpen(false)
                }
                className={`text-lg ${
                  location.pathname === item.path
                    ? "text-yellow-400"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>

            ))}

            <button
              onClick={() => {
                navigate("/signin");
                setMenuOpen(false);
              }}
              className="w-full border border-yellow-500 py-3 rounded-full text-yellow-400"
            >
              Sign In
            </button>

            <button
              onClick={() => {
                navigate("/register");
                setMenuOpen(false);
              }}
              className="w-full bg-yellow-500 text-black py-3 rounded-full font-bold"
            >
              Register
            </button>

            <button
              onClick={() => {
                navigate("/booking");
                setMenuOpen(false);
              }}
              className="w-full bg-white text-black py-3 rounded-full font-bold"
            >
              Book Room
            </button>

          </div>

        </div>

      )}
    </header>
  );
}