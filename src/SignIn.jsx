import React, { useState } from "react";
import { signInWithEmail } from "../firebase/auth"; 
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
      alert("Login successful!");
      navigate("/dashboard"); // or your homepage
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ffb2d4] to-[#FF157A] p-6">
      <div className="bg-white shadow-xl p-10 w-full max-w-md min-h-[600px] flex flex-col items-center justify-start text-center space-y-6">
        <img
          src="/logo.png"
          alt="App Logo"
          style={{ height: "100px", objectFit: "contain" }}
        />

        <h2 className="text-2xl font-bold text-[#FF157A]">Sign In</h2>
        <form className="space-y-4 w-full text-left">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
