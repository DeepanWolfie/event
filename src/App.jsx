import React from "react";
import LoginForm from "./Pages/LoginPage/LoginForm";
import Signup from "./Pages/Signup/SignupForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminMainPage from "./Admin/AdminMainPage/AdminMainPage";
import AdminDashboard from "./Admin/AdminDashboard/AdminDashboard";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminPanel" element={<AdminMainPage />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </div>
  );
}

export default App;
