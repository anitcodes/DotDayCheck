// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import SignUp from "./SignUp";
// import SignUpWithEmail from "./SignUpWithEmail";
// import SignIn from "./SignIn";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SignUp />} />
//         <Route path="/signup-email" element={<SignUpWithEmail />} />
//         <Route path="/signin" element={<SignIn />} />
//       </Routes>
//     </Router>
//   );
// }

// src/App.jsx

import React from "react";
import UserOnboarding from "./UserOnboarding.jsx";

export default function App() {
  return (
    <div>
      <UserOnboarding />
    </div>
  );
}
