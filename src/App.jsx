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
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
<Route
  path="/help"
  element={<Help />}
/>
        <Route
          path="/signin"
          element={<Login />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/summary"
          element={<BookingSummary />}
        />

        <Route
          path="/payment"
          element={<Payment />}
        />

        <Route
          path="/success"
          element={<Success />}
        />
<Route
  path="/stays"
  element={<Stays />}
/>
<Route
  path="/payment"
  element={<Payment />}
/>
<Route
path="/gallery"
element={<Gallery />}
/>

<Route
path="/contact"
element={<Contact />}
/>
<Route
  path="/signin"
  element={<SignIn />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;