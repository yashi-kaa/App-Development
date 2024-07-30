import React from "react";
import "./Adminpostpaid.css";

const Adminpostpaid = () => {
  
  const postpaidPlans = [
    {
      id: 1,
      name: "Plan X",
      price: "$30",
      validity: "1 month",
      data: "10GB",
      calls: "Unlimited",
    },
    {
      id: 2,
      name: "Plan Y",
      price: "$50",
      validity: "2 months",
      data: "20GB",
      calls: "Unlimited",
    },
    {
      id: 3,
      name: "Plan Z",
      price: "$70",
      validity: "3 months",
      data: "30GB",
      calls: "Unlimited",
    },
    {
      id: 4,
      name: "Plan A",
      price: "$90",
      validity: "4 months",
      data: "40GB",
      calls: "Unlimited",
    },
    {
      id: 5,
      name: "Plan B",
      price: "$110",
      validity: "5 months",
      data: "50GB",
      calls: "Unlimited",
    },
  ];

  return (
    <div className="admin-postpaid-container">
      <h2>Postpaid Plans Details</h2>
      <div className="admin-postpaid-list">
        {postpaidPlans.map((plan) => (
          <div key={plan.id} className="admin-postpaid-card">
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

export default Adminpostpaid;
