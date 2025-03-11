import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Registration from "./pages/Registration.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
