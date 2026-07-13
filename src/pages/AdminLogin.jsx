import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Invalid Username or Password");
        setLoading(false);
        return;
      }

      // Save JWT token
      localStorage.setItem("adminToken", data.token);

      alert("Login Successful");

      navigate("/admin/dashboard");

    } catch (error) {
      console.error(error);
      alert("Server Error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="bg-zinc-900 p-10 rounded-3xl w-[420px] border border-yellow-500">

        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10">
          Admin Login
        </h1>

        <input
          type="test"
          placeholder="Username"
          value={username}
          onChange={(e) =>setUsername(e.target.value)}
          className="w-full p-4 rounded-xl bg-black border border-yellow-500 text-white mb-5"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-xl bg-black border border-yellow-500 text-white mb-8"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold text-lg hover:bg-yellow-400"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>

    </div>
  );
}