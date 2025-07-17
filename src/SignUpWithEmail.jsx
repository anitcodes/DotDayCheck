import { useState } from "react";
import { registerWithEmail } from "./firebase/auth";
import { getAuth, updateProfile } from "firebase/auth"; 
import { useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Mail, Lock, User, ArrowLeft, ArrowRight } from "lucide-react"

export default function SignUpWithEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();


  const handleSignUp = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
    }
    try {
      const userCredential = await registerWithEmail(email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name
      });

      alert("Registration successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Card className="w-full max-w-md rounded-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-900">Create Your Account</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <p className="text-center text-gray-600">Enter your details to get started.</p>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Email address"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              icon={ArrowRight}
            >
              Sign Up
            </Button>
          </form>
          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" onClick={() => navigate("/signin")} className="text-pink-600 hover:underline font-medium">
              Sign In
            </a>
          </div>
          <div className="text-center text-sm text-gray-600">
            <a
              href="#"
              onClick={() => navigate("/signup")}
              className="text-gray-500 hover:underline flex items-center justify-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Sign Up options
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
