import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import "./RechargeForm.css"; 
const RechargeFormPage = () => {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan;

  const handleRecharge = () => {
    console.log("Recharge initiated with plan: ", selectedPlan);
  };

  return (
    <Box className="fullHeightContainer">
      <Box className="rechargeForm">
        <Typography variant="h6" gutterBottom>
          Recharge Form
        </Typography>
        <TextField
          label="Enter your Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Enter Number to Recharge"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Enter Email ID"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        {selectedPlan && (
          <Box className="planDetails">
            <Typography>Plan: {selectedPlan.type}</Typography>
            <Typography>Price: ₹{selectedPlan.price}</Typography>
            <Typography>Offer: {selectedPlan.offer}</Typography>
          </Box>
        )}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRecharge}
          sx={{ mt: 2 }}
        >
          Recharge
        </Button>
      </Box>
    </Box>
  );
};

export default RechargeFormPage;
