import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Admin() {

  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch("https://hotel-asmati-backend.onrender.com/api/payments")
      .then(res => res.json())
      .then(data => {
        setPayments(data);
      })
      .catch(err => console.log(err));
  }, []);

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

              <p>Status : {payment.status}</p>

              {payment.screenshot && (

                <img
                  src={`https://hotel-asmati-backend.onrender.com/uploads/${payment.screenshot}`}
                  alt="Payment"
                  className="w-64 mt-5 rounded-xl"
                />

              )}

            </div>

          ))

        )}

      </div>

      <Footer />

    </div>
  );
}