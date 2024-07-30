import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import "./addplanpage.css";

const AddPlanPage = () => {
  const [planType, setPlanType] = useState("");
  const [planPrice, setPlanPrice] = useState("");
  const [planOffer, setPlanOffer] = useState("");
  const [planValidity, setPlanValidity] = useState("");
  const [planDescription, setPlanDescription] = useState("");

  const handleAddPlan = () => {
    // Add plan logic
    console.log({
      planType,
      planPrice,
      planOffer,
      planValidity,
      planDescription,
    });
  };

  return (
    <div className="background-container">
      <Container className="add-plan-container">
        <Card className="add-plan-card">
          <CardContent>
            <Typography variant="h5" className="add-plan-title">
              Add New Plan
            </Typography>
            <form className="add-plan-form" noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    size="small"
                  >
                    <InputLabel>Enter Plan Type</InputLabel>
                    <Select
                      value={planType}
                      onChange={(e) => setPlanType(e.target.value)}
                      label="Enter Plan Type"
                    >
                      <MenuItem value="Postpaid">Postpaid</MenuItem>
                      <MenuItem value="Prepaid">Prepaid</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Enter the Plan Price"
                    value={planPrice}
                    onChange={(e) => setPlanPrice(e.target.value)}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Enter the Offer for the Plan"
                    value={planOffer}
                    onChange={(e) => setPlanOffer(e.target.value)}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Enter Plan Validity"
                    value={planValidity}
                    onChange={(e) => setPlanValidity(e.target.value)}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Enter Plan Description"
                    value={planDescription}
                    onChange={(e) => setPlanDescription(e.target.value)}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    size="small"
                    multiline
                    rows={3}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddPlan}
                className="add-plan-button"
              >
                Add Plan
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default AddPlanPage;
