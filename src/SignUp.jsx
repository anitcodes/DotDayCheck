import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, signInWithFacebook } from "./firebase/auth";
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Mail } from "lucide-react"

export default function SignUp() {
  const navigate = useNavigate();

  const handleSignUpWithEmail = () => {
    navigate("/signupwithemail")
  }
  
  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
      alert("Signed in with Google!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleFacebookSignUp = async () => {
    try {
      await signInWithFacebook();
      alert("Signed in with Facebook!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Card className="w-full max-w-md rounded-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-900">Join DotDay</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <p className="text-center text-gray-600">Create your account to start tracking your cycle.</p>

          {/* Sign Up with Email */}
          <Button
            onClick={handleSignUpWithEmail}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2" />
            Sign Up with Email
          </Button>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            {/* <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div> */}
            <div className="relative px-4 text-sm text-black">Or continue with</div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="py-3 rounded-xl flex items-center justify-center gap-2 bg-transparent"
              onClick={handleGoogleSignUp}
            >
              <FcGoogle className="h-5 w-5" />
              Google
            </Button>
            <Button
              variant="outline"
              className="py-3 rounded-xl flex items-center justify-center gap-2 bg-transparent"
              onClick={handleFacebookSignUp}
            >
              <FaFacebookF className="h-5 w-5 text-[#3b5998]" />
              Facebook
            </Button>
          </div>

          {/* Sign In Redirect */}
          <div className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a
              href="#"
              onClick={() => navigate("/signin")}
              className="text-pink-600 hover:underline font-medium"
            >
              Sign In
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
