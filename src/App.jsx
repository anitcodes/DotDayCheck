import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./SignUp";
import SignUpWithEmail from "./SignUpWithEmail";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard.jsx";
import Calender from "./Calendar.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-email" element={<SignUpWithEmail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
    </Router>
  );
}

// src/App.jsx



// export default function App() {
//   return (
//     <div>
//       <Dashboard />
//     </div>
//   );
// }

