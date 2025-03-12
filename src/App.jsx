import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Registration from "./pages/Registration.jsx";
import Footer from "./components/Footer.jsx";
import OtpPage from "./pages/OtpPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/register" element={<Registration />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/otp" element={<OtpPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword
        />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
