"use client"

import { useState } from "react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Mail, Lock, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom" // Import useNavigate

export default function SignIn() {
  // Removed onNavigate prop
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate() // Initialize useNavigate

  const handleSignIn = (e) => {
    e.preventDefault()
    console.log("Signing in with:", { email, password })
    // Simulate sign-in logic
    if (email === "test@example.com" && password === "password") {
      alert("Sign-in successful!")
      navigate("/dashboard") // Use navigate to go to dashboard
    } else {
      alert("Invalid credentials. Please try again.")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Card className="w-full max-w-md rounded-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-900">Welcome Back!</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <p className="text-center text-gray-600">Sign in to your DotDay account.</p>
          <form onSubmit={handleSignIn} className="space-y-4">
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
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              icon={ArrowRight}
            >
              Sign In
            </Button>
          </form>
          <div className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" onClick={() => navigate("/signup")} className="text-pink-600 hover:underline font-medium">
              Sign Up
            </a>
          </div>
          <div className="text-center text-sm text-gray-600">
            <a href="#" className="text-gray-500 hover:underline">
              Forgot password?
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
