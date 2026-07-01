import { useState } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  setDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase";

import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password,
    setPassword,
  ] = useState("");

  const registerUser =
    async () => {
      try {
        const userCredential =
          await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

        await setDoc(
          doc(
            db,
            "users",
            userCredential
              .user.uid
          ),
          {
            name,
            email,
            createdAt:
              new Date(),
          }
        );

        alert(
          "Registration Successful"
        );

        navigate(
          "/signin"
        );
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

        <div className="bg-zinc-900 p-8 rounded-[35px] border border-zinc-700">

          <h1 className="text-4xl text-center font-bold text-yellow-400 mb-8">
            Register
          </h1>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target
                  .value
              )
            }
            className="w-full mb-4 p-4 rounded-xl bg-black border border-zinc-700"
          />

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
              registerUser
            }
            className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold"
          >
            Register
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}