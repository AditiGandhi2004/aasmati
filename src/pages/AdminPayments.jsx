import { useEffect, useState } from "react";

export default function AdminPayments() {
  const [payments, setPayments] = useState([]);

  const loadPayments = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/payments`
    );

    const data = await response.json();

    setPayments(data);
  };

  useEffect(() => {
    loadPayments();
  }, []);

  const updateStatus = async (id, status) => {
    await fetch(
      `${import.meta.env.VITE_API_URL}/api/payments/${id}`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          status,
        }),
      }
    );

    loadPayments();
  };

  return (
    <div>

      <h1 className="text-3xl font-bold text-yellow-400 mb-8">
        Payment Verification
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-yellow-500 text-black">

            <tr>

              <th className="p-4">Guest</th>

              <th className="p-4">Phone</th>

              <th className="p-4">Amount</th>

              <th className="p-4">Transaction ID</th>

              <th className="p-4">Method</th>

              <th className="p-4">Status</th>

              <th className="p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {payments.map((payment) => (

              <tr
                key={payment._id}
                className="border-b border-zinc-700"
              >

                <td className="p-4">
                  {payment.customerName}
                </td>

                <td className="p-4">
                  {payment.phone}
                </td>

                <td className="p-4">
                  ₹{payment.amount}
                </td>

                <td className="p-4">
                  {payment.transactionId}
                </td>

                <td className="p-4">
                  {payment.paymentMethod}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-2 rounded-lg ${
                      payment.status === "Confirmed"
                        ? "bg-green-600"
                        : payment.status === "Cancelled"
                        ? "bg-red-600"
                        : "bg-yellow-600"
                    }`}
                  >
                    {payment.status}
                  </span>

                </td>

                <td className="p-4 space-x-2">

                  <button
                    onClick={() =>
                      updateStatus(
                        payment._id,
                        "Confirmed"
                      )
                    }
                    className="bg-green-600 px-4 py-2 rounded-lg"
                  >
                    Confirm
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        payment._id,
                        "Cancelled"
                      )
                    }
                    className="bg-red-600 px-4 py-2 rounded-lg"
                  >
                    Cancel
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}