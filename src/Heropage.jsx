import { Link } from "react-router-dom"
import { Button } from "./components/ui/button"
import { ArrowRight } from "lucide-react" // Only need ArrowRight for buttons

export default function HeroPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50 p-4 overflow-hidden">
      {/* Subtle, abstract background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 py-16 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-100">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <img src="dotdaylogo.png" alt="DotDay Logo" className="h-28 w-auto" />
        </div>

        {/* Bold, impactful headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Empower Your Wellness Journey
        </h1>

        {/* Concise subheading */}
        <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-6">Track, Understand, Thrive.</p>

        {/* Short and easy-to-read main paragraph */}
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          DotDay- A Period Tracker helps you predict your cycle, manage symptoms, and gain personalized insights, empowering you to
          live in harmony with your body.
        </p>

        {/* Prominent, distinct "Sign Up" and "Login" buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="gradient" size="lg" className="py-3 px-8 text-lg">
            <Link to="/signup">
              Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="py-3 px-8 text-lg bg-white">
            <Link to="/signin">
              Log In <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Tailwind CSS animation for blobs */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
