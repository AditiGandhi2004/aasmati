import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export default function SignIn() {
  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password,
    setPassword,
  ] = useState("");

  const loginUser =
    async () => {
      try {
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        alert(
          "Login Successful"
        );

        navigate("/");
      } catch (error) {
        alert(
          error.message
        );
      }
    };

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-md mx-auto pt-32 pb-20 px-5">

        <div className="bg-zinc-900 border border-zinc-700 rounded-[35px] p-8">

          <h1 className="text-4xl text-center font-bold text-yellow-400 mb-8">
            Sign In
          </h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target
                  .value
              )
            }
            className="w-full mb-4 p-4 rounded-xl bg-black border border-zinc-700"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target
                  .value
              )
            }
            className="w-full mb-6 p-4 rounded-xl bg-black border border-zinc-700"
          />

          <button
            onClick={
              loginUser
            }
            className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Sign In
          </button>

          <p className="text-center text-zinc-400 mt-5">
            Don't have an
            account?{" "}
            <span
              onClick={() =>
                navigate(
                  "/register"
                )
              }
              className="text-yellow-400 cursor-pointer"
            >
              Register
            </span>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}