import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import SIgnInOutContainer from "./Container";
import AdminDashboard from "./assets/Components/AdminDashboard";
import SignUp from "./assets/Components/Signup";
import Login from "./assets/Components/Login";
import BasicTabs from "./Container";

function App() {
  // Function to handle logout
  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SIgnInOutContainer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
