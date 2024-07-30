import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider} from "./Components/AuthContext" ;
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import AdminDashboard from "./Components/AdminDashboard";
import ForgotPassword from "./Components/ForgotPassword";
import CustomerDashboard from "./Components/CustomerDashboard";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import PrepaidPlansPage from "./Components/PrepaidPlansPage";
import PostpaidPlansPage from "./Components/PostpaidPlansPage";
import AddPlanPage from "./Components/AddPlanPage";
import RechargeFormPage from "./Components/RechargeFormPage";
import PrepaidRechargeForm from "./Components/PrepaidRechargeForm";
import Adminprepaid from "./Components/Adminprepaid";
import Adminpostpaid from "./Components/Adminpostpaid";
import { Box } from "@mui/material";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/prepaid-plans" element={<PrepaidPlansPage />} />
          <Route path="/postpaid-plans" element={<PostpaidPlansPage />} />
          <Route path="/admin/add-plan" element={<AddPlanPage />} />
          <Route path="/recharge" element={<RechargeFormPage />} />
          <Route path="/prepaid-recharge" element={<PrepaidRechargeForm />} />
          <Route path="/admin/prepaid-plans" element={<Adminprepaid />} />
          <Route path="/admin/postpaid-plans" element={<Adminpostpaid />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
