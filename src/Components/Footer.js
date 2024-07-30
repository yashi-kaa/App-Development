import React from "react";
import { Container, Box, Typography, Link } from "@mui/material";
import "./footer.css";

export default function Footer() {
  return (
    <Box className="footer">
      <Container maxWidth="sm">
        <Typography variant="body1">Mobile Recharge Portal</Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {"© "}
          <Link color="inherit" href="https://yourwebsite.com/">
            Your Company
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}
