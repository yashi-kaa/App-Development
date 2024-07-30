import React from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import "./contact.css";
import ContactImage from "../assets/contact.png"; 

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
   
    alert("Form submitted successfully");
  };

  return (
    <div className="contact-container">
      <Box className="contact-image">
        <img src={ContactImage} alt="Contact" className="image-style" />
      </Box>
      <Paper elevation={3} className="contact-form">
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            className="input-field"
            sx={{ marginBottom: "16px" }} 
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            className="input-field"
            sx={{ marginBottom: "16px" }} 
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
            className="input-field"
            sx={{ marginBottom: "16px" }} 
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="submit-button"
            sx={{ fontSize: "14px" }} 
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Contact;
