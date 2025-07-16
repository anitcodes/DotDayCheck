import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Heropage from "./Heropage"
import Dashboard from "./Dashboard"
import Calendar from "./Calendar"
import Insights from "./Insights"
import MyDiary from "./MyDiary"
import CareTips from "./CareTips"
import Profile from "./Profile"
import Settings from "./Settings"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import SignUpWithEmail from "./SignUpWithEmail"
import UserOnboarding from "./UserOnboarding"

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Heropage />} /> Set HeroPage as the root */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/diary" element={<MyDiary />} />
        <Route path="/care-tips" element={<CareTips />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signupwithemail" element={<SignUpWithEmail />} />
        <Route path="/onboarding" element={<UserOnboarding />} />
      </Routes>
    </Router>
  )
}

export default App
