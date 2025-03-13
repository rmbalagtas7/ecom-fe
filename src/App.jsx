import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Registration from "./pages/Registration.jsx";
import Footer from "./components/Footer.jsx";
import OtpPage from "./pages/OtpPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import Products from "./pages/Products.jsx";
import MyCart from "./pages/MyCart.jsx";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <NavBar cartCount={cartCount} cart={cart} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/register" element={<Registration />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/otp" element={<OtpPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="/products" element={<Products setCartCount={setCartCount} setCart={setCart} cart={cart} />} />
        <Route path="/my-cart" element={<MyCart cartList={cart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
