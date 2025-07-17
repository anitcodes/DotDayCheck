import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Heropage from "./Heropage"
import Dashboard from "./Dashboard"
import Calendar from "./Calendar"
import Insights from "./Insights"
import MyDiary from "./MyDiary"
import CareTips from "./CareTips"
import Settings from "./Settings"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import SignUpWithEmail from "./SignUpWithEmail"
import UserOnboarding from "./UserOnboarding"
import MainAppLayout from "./main-app-layout" // Import the new layout component

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes without sidebar (e.g., authentication, onboarding, hero page) */}
        <Route path="/heropage" element={<Heropage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signupwithemail" element={<SignUpWithEmail />} />
        <Route path="/onboarding" element={<UserOnboarding />} />

        {/* Routes that use the MainAppLayout (with sidebar) */}
        <Route element={<MainAppLayout />}>
        {/* <Route path="/" element={<Heropage />} /> */}

          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} /> {/* Keeping as per your original code */}
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/diary" element={<MyDiary />} />
          <Route path="/care-tips" element={<CareTips />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App
