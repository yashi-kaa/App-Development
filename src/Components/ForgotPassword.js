import React, { useState } from "react";
import { TextField, Button, Alert, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./forgotPassword.css";

export default function ForgotPassword() {
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [formValid, setFormValid] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPhoneNumber = (phone) => /^[0-9]{10}$/.test(phone);

  const handleEmail = () => {
    setEmailError(!isEmail(emailInput));
  };

  const handlePhone = () => {
    setPhoneError(!isPhoneNumber(phoneInput));
  };

  const handleSubmit = async () => {
    setSuccess(null);
    handleEmail();
    handlePhone();

    if (emailError || !emailInput || phoneError || !phoneInput) {
      setFormValid("Please enter a valid email address and phone number.");
      return;
    }
    setFormValid(null);

    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInput, phone: phoneInput }),
      });
      if (response.ok) {
        setSuccess("Password reset link sent to your email.");
      } else {
        setFormValid("Error sending password reset link. Please try again.");
      }
    } catch (error) {
      setFormValid("Error sending password reset link. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <div className="forgot-password-box">
          <h1>Forgot Password</h1>
          <div style={{ marginBottom: "1rem" }}>
            <TextField
              label="Email"
              fullWidth
              error={emailError}
              variant="standard"
              value={emailInput}
              onBlur={handleEmail}
              onChange={(event) => setEmailInput(event.target.value)}
              helperText={emailError ? "Invalid email" : ""}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <TextField
              label="Phone Number"
              fullWidth
              error={phoneError}
              variant="standard"
              value={phoneInput}
              onBlur={handlePhone}
              onChange={(event) => setPhoneInput(event.target.value)}
              helperText={phoneError ? "Invalid phone number" : ""}
            />
          </div>
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            SUBMIT
          </Button>
          {formValid && (
            <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
              <Alert severity="error" size="small">
                {formValid}
              </Alert>
            </Stack>
          )}
          {success && (
            <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
              <Alert severity="success" size="small">
                {success}
              </Alert>
            </Stack>
          )}
          <div
            style={{ marginTop: "1rem", fontSize: "12px", textAlign: "center" }}
          >
            <Button className="link" onClick={() => navigate("/login")}>
              Back to Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
