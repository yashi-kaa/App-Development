import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, CardContent, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star"; 
import "./PlanPage.css";

const PrepaidPlansPage = () => {
  const navigate = useNavigate();
  const plans = [
    {
      type: "PREPAID",
      price: 79,
      validity: 28,
      speed: "10 MBPS",
      offer: "unlimited data",
    },
    {
      type: "PREPAID",
      price: 199,
      validity: 56,
      speed: "20 MBPS",
      offer: "2GB/day",
    },
    {
      type: "PREPAID",
      price: 399,
      validity: 84,
      speed: "50 MBPS",
      offer: "3GB/day",
    },
    {
      type: "PREPAID",
      price: 599,
      validity: 365,
      speed: "100 MBPS",
      offer: "4GB/day",
    },
  ];

  const handlePlanClick = (plan) => {
    navigate("/prepaid-recharge", { state: { selectedPlan: plan } });
  };

  return (
    <div>
      <Container className="priya">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className="card"
            onClick={() => handlePlanClick(plan)}
          >
            <CardContent className="cardContent">
              <div className="leftSide">
                <Typography variant="h6" className="planType">
                  {plan.type}
                  {index === 0 && <div className="badge">Best</div>}{" "}
                  {/* Badge for the top plan */}
                </Typography>
                <Typography className="price">Rs : {plan.price}</Typography>
                <Typography className="speed">Speed : {plan.speed}</Typography>
                <Typography className="offer">Offer : {plan.offer}</Typography>
              </div>
              <div className="rightSide">
                <Typography className="data">
                  Data :{" "}
                  {plan.offer.includes("GB")
                    ? plan.offer.split(" ")[0]
                    : "Unlimited"}
                </Typography>
                <Typography className="validity">
                  Validity : {plan.validity} Days
                </Typography>
                <div className="stars">
                  {/* Render stars */}
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="star" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default PrepaidPlansPage;
