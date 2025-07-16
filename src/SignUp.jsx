import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, signInWithFacebook } from "../firebase/auth";

export default function SignUp() {
  const navigate = useNavigate();
  
  const handleGoogleSignup = async () => {
    try {
      await signInWithGoogle();
      alert("Signed in with Google!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleFacebookSignup = async () => {
    try {
      await signInWithFacebook();
      alert("Signed in with Facebook!");
      navigate("/dashboard");
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

        <div>
          <h2 className="text-2xl font-bold text-[#FF157A]">Let's Get Started!</h2>
          <p className="text-sm text-gray-500">Create your account</p>
        </div>

        <div className="w-full space-y-4">
          <button onClick={handleGoogleSignup} className="flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition w-full">
            <FcGoogle size={20} />
            <span className="text-sm font-medium text-gray-700">Continue with Google</span>
          </button>
          <button onClick={handleFacebookSignup} className="flex items-center justify-center gap-2 bg-[#3b5998] text-white py-3 rounded-lg hover:bg-[#2d4373] transition w-full">
            <FaFacebookF size={18} />
            <span className="text-sm font-medium">Continue with Facebook</span>
          </button>
        </div>

        <div className="text-sm text-gray-400">or</div>

        <button
          onClick={() => navigate("/signup-email")}
          className="w-full bg-[#FF157A] text-white font-semibold rounded-lg py-3 hover:bg-pink-600 transition"
        >
          Sign up with Email
        </button>

        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/signin")}
            className="text-[#FF157A] underline hover:opacity-80 bg-transparent border-0 p-0 cursor-pointer"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
