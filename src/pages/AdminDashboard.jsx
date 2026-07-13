import { useNavigate } from "react-router-dom";
import AdminBookings from "./AdminBookings";
export default function AdminDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}

      <div className="w-72 bg-zinc-900 border-r border-yellow-500 p-8">

        <h1 className="text-3xl font-bold text-yellow-400 mb-12">
          Hotel Asmati
        </h1>

        <div className="space-y-5">

          <button className="w-full text-left bg-yellow-500 text-black px-5 py-3 rounded-xl font-semibold">
            📊 Dashboard
          </button>

          
<button
  onClick={() => navigate("/admin/payments")}
  className="w-full text-left hover:text-yellow-400"
>
  💳 Payments
</button>
         <button
  onClick={() => navigate("/admin/bookings")}
  className="w-full text-left hover:text-yellow-400"
>
  📖 Bookings
</button>

          <button className="w-full text-left hover:text-yellow-400">
            👥 Customers
          </button>

          <button className="w-full text-left hover:text-yellow-400">
            🏨 Rooms
          </button>

        </div>

        <button
          onClick={logout}
          className="mt-20 bg-red-500 w-full py-3 rounded-xl"
        >
          Logout
        </button>

      </div>

      {/* Main */}

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold text-yellow-400">
          Dashboard
        </h1>

        <p className="text-zinc-400 mt-2">
          Welcome Hotel Administrator
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="bg-zinc-900 rounded-3xl p-8 border border-yellow-500">

            <h3 className="text-zinc-400">
              Today's Bookings
            </h3>

            <h1 className="text-5xl font-bold mt-5">
              0
            </h1>

          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-yellow-500">

            <h3 className="text-zinc-400">
              Pending Payments
            </h3>

            <h1 className="text-5xl font-bold mt-5">
              0
            </h1>

          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-yellow-500">

            <h3 className="text-zinc-400">
              Revenue
            </h3>

            <h1 className="text-5xl font-bold mt-5">
              ₹0
            </h1>

          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-yellow-500">

            <h3 className="text-zinc-400">
              Customers
            </h3>

            <h1 className="text-5xl font-bold mt-5">
              0
            </h1>

          </div>

        </div>

      </div>

    </div>
  );
}