import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Admin() {

  const [payments, setPayments] = useState([]);

  const loadPayments = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/payments`)
      .then(res => res.json())
      .then(data => {
        setPayments(data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    loadPayments();
  }, []);

  const updateStatus = async (id, status) => {

    try {

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/payments/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      const data = await response.json();

      if (data.success) {
        loadPayments();
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto pt-32 pb-20 px-6">

        <h1 className="text-5xl font-bold text-yellow-400 mb-10">
          Admin Dashboard
        </h1>

        {payments.length === 0 ? (

          <h2>No Payments Found</h2>

        ) : (

          payments.map((payment) => (

            <div
              key={payment._id}
              className="bg-zinc-900 border border-yellow-500 rounded-2xl p-8 mb-8"
            >

              <h2 className="text-2xl font-bold text-yellow-400">
                {payment.customerName}
              </h2>

              <p>Email : {payment.email}</p>

              <p>Phone : {payment.phone}</p>

              <p>Amount : ₹{payment.amount}</p>

              <p>Transaction ID : {payment.transactionId}</p>

              <p className="mt-3">
                Status :
                <span className="font-bold text-yellow-400 ml-2">
                  {payment.status}
                </span>
              </p>

              <div className="flex gap-4 mt-6">

                <button
                  onClick={() =>
                    updateStatus(payment._id, "Pending")
                  }
                  className="bg-yellow-500 text-black px-5 py-2 rounded-lg"
                >
                  Pending
                </button>

                <button
                  onClick={() =>
                    updateStatus(payment._id, "Confirmed")
                  }
                  className="bg-green-600 px-5 py-2 rounded-lg"
                >
                  Confirm
                </button>

                <button
                  onClick={() =>
                    updateStatus(payment._id, "Cancelled")
                  }
                  className="bg-red-600 px-5 py-2 rounded-lg"
                >
                  Cancel
                </button>

              </div>

            </div>

          ))

        )}

      </div>

      <Footer />

    </div>
  );
}