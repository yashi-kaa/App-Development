import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import "./PrepaidRechargeForm.css";

const PrepaidRechargeFormPage = () => {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan;

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleRecharge = () => {
    console.log("Recharge initiated with plan: ", selectedPlan);

    // Show success alert
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box className="fullHeightContainer">
      <Box className="rechargeForm">
        <Typography variant="h6" gutterBottom>
          Prepaid Recharge
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
            <Typography>Speed: {selectedPlan.speed}</Typography>
            <Typography>Validity: {selectedPlan.validity} Days</Typography>
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

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Recharge successful!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PrepaidRechargeFormPage;
