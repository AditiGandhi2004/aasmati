import { BrowserRouter, Routes, Route } from "react-router-dom";

import Help from "./pages/Help";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import BookingSummary from "./pages/BookingSummary";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Stays from "./pages/Stays";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminPayments from "./pages/AdminPayments";
import AdminBookings from "./pages/AdminBookings";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* User Pages */}

        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route path="/signin" element={<Login />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/summary" element={<BookingSummary />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/success" element={<Success />} />

        <Route path="/stays" element={<Stays />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/help" element={<Help />} />


        {/* Admin */}

        <Route 
          path="/admin" 
          element={<AdminLogin />} 
        />


        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />


        <Route
          path="/admin/bookings"
          element={<AdminBookings />}
        />


        <Route
          path="/admin/payments"
          element={<AdminPayments />}
        />


      </Routes>

    </BrowserRouter>
  );
}

export default App;
