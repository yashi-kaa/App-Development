import React from "react";
import "./Adminprepaid.css";

const Adminprepaid = () => {
  
  const prepaidPlans = [
    {
      id: 1,
      name: "Plan A",
      price: "$10",
      validity: "30 days",
      data: "1GB/day",
      calls: "Unlimited",
    },
    {
      id: 2,
      name: "Plan B",
      price: "$20",
      validity: "60 days",
      data: "1.5GB/day",
      calls: "Unlimited",
    },
    {
      id: 3,
      name: "Plan C",
      price: "$30",
      validity: "90 days",
      data: "2GB/day",
      calls: "Unlimited",
    },
    {
      id: 4,
      name: "Plan D",
      price: "$40",
      validity: "120 days",
      data: "2.5GB/day",
      calls: "Unlimited",
    },
    {
      id: 5,
      name: "Plan E",
      price: "$50",
      validity: "150 days",
      data: "3GB/day",
      calls: "Unlimited",
    },
  ];

  return (
    <div className="admin-prepaid-container">
      <h2>Prepaid Plans Details</h2>
      <div className="admin-prepaid-list">
        {prepaidPlans.map((plan) => (
          <div key={plan.id} className="admin-prepaid-card">
            <h3>{plan.name}</h3>
            <p>
              <strong>Price:</strong> {plan.price}
            </p>
            <p>
              <strong>Validity:</strong> {plan.validity}
            </p>
            <p>
              <strong>Data:</strong> {plan.data}
            </p>
            <p>
              <strong>Calls:</strong> {plan.calls}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adminprepaid;
