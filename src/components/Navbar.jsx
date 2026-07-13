import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  User,
  BedDouble,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking anywhere
  useEffect(() => {
    const closeDropdown = () => {
      setMoreOpen(false);
    };

    window.addEventListener("click", closeDropdown);

    return () => {
      window.removeEventListener("click", closeDropdown);
    };
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
      <div className="max-w-[1600px] mx-auto h-16 xl:h-20 px-6 xl:px-10 flex items-center justify-between">

        {/* Logo */}

        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="/logo.png"
            alt="Hotel Aasmati"
            className="w-10 h-10 xl:w-12 xl:h-12 rounded-full border border-yellow-500 object-cover shadow-lg"
          />

          <div>
            <h1 className="text-xl xl:text-3xl font-bold text-white leading-none">
              Hotel Aasmati
            </h1>

            <p className="text-[10px] xl:text-[11px] tracking-[5px] text-yellow-400">
              CORPORATION
            </p>
          </div>
        </div>
                {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-base xl:text-lg font-medium">

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
                <span className="absolute -bottom-2 left-0 w-full h-[3px] rounded-full bg-yellow-400"></span>
              )}

            </Link>

          ))}

          {/* More Dropdown */}

          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={`flex items-center gap-1 transition ${
                ["/history", "/help", "/admin"].includes(location.pathname)
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >

              More

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  moreOpen ? "rotate-180" : ""
                }`}
              />

            </button>

            {moreOpen && (

              <div className="absolute top-12 left-0 w-56 rounded-2xl overflow-hidden bg-zinc-900 border border-yellow-500 shadow-2xl">

                <Link
                  to="/history"
                  onClick={() => setMoreOpen(false)}
                  className="block px-5 py-3 text-white hover:bg-yellow-500 hover:text-black transition"
                >
                  Booking History
                </Link>

                <Link
                  to="/help"
                  onClick={() => setMoreOpen(false)}
                  className="block px-5 py-3 text-white hover:bg-yellow-500 hover:text-black transition"
                >
                  Help Center
                </Link>

                <Link
                  to="/admin"
                  onClick={() => setMoreOpen(false)}
                  className="block px-5 py-3 text-white hover:bg-yellow-500 hover:text-black transition"
                >
                  Admin Login
                </Link>

              </div>

            )}

          </div>

        </nav>

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-4">

          <a
            href="tel:6265742422"
            className="flex items-center gap-2 text-white hover:text-yellow-400 transition"
          >
            <Phone size={18} />
            <span className="hidden xl:block">
              Book Now
            </span>
          </a>

          <button
            onClick={() => navigate("/signin")}
            className="flex items-center gap-2 border border-yellow-500 text-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            <User size={18} />
            Sign In
          </button>

          <button
            onClick={() => navigate("/register")}
            className="text-sm text-gray-300 hover:text-yellow-400 transition"
          >
            Register
          </button>

          <button
            onClick={() => navigate("/booking")}
            className="flex items-center gap-2 bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 shadow-lg"
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
          {menuOpen ? <X size={34} /> : <Menu size={34} />}
        </button>
        </div>
              {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-yellow-500/20 shadow-2xl">

          <div className="px-6 py-6 flex flex-col gap-5">

            {/* Navigation Links */}

            {navLinks.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium transition ${
                  location.pathname === item.path
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.name}
              </Link>

            ))}

            {/* Extra Links */}

            <div className="border-t border-zinc-700 pt-4 flex flex-col gap-4">

              <Link
                to="/history"
                onClick={() => setMenuOpen(false)}
                className={`text-lg transition ${
                  location.pathname === "/history"
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                Booking History
              </Link>

              <Link
                to="/help"
                onClick={() => setMenuOpen(false)}
                className={`text-lg transition ${
                  location.pathname === "/help"
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                Help Center
              </Link>

              <Link
                to="/admin"
                onClick={() => setMenuOpen(false)}
                className={`text-lg transition ${
                  location.pathname === "/admin"
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                Admin Login
              </Link>

            </div>

            {/* Divider */}

            <div className="border-t border-zinc-700 pt-5 flex flex-col gap-4">

              <button
                onClick={() => {
                  navigate("/signin");
                  setMenuOpen(false);
                }}
                className="w-full border border-yellow-500 text-yellow-400 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition"
              >
                Sign In
              </button>

              <button
                onClick={() => {
                  navigate("/register");
                  setMenuOpen(false);
                }}
                className="w-full border border-white text-white py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                Register
              </button>

              <button
                onClick={() => {
                  navigate("/booking");
                  setMenuOpen(false);
                }}
                className="w-full bg-yellow-500 text-black py-3 rounded-full font-bold hover:bg-yellow-400 transition"
              >
                Book Room
              </button>

              <a
                href="tel:6265742422"
                className="flex items-center justify-center gap-2 text-yellow-400 mt-2"
              >
                <Phone size={18} />
                Call Reception
              </a>

            </div>

          </div>

        </div>

      )}

    </header>
  );
  }