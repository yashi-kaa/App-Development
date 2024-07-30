import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Welcome.css"; 

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1>Welcome to the Mobile Recharge Portal</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/login")}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
