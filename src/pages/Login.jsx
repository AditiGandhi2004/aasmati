import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">

      <form
        onSubmit={loginUser}
        className="bg-zinc-900 p-10 rounded-xl w-[400px] border border-yellow-500"
      >
        <h1 className="text-4xl text-yellow-400 mb-6 text-center font-bold">
          Sign In
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-lg mb-4 text-black"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-lg mb-4 text-black"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button className="bg-yellow-500 w-full py-4 rounded-lg text-black font-bold hover:scale-105 transition">
          Login
        </button>
      </form>
    </div>
  );
}