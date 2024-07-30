import React from "react";
import "./CustomerDashboard.css"; 

const CustomerDashboard = () => {
  return (
   <div className="ros">
    <div className="poos">
    <div className="customer-dashboard-wrapper">
      <div className="customer-dashboard-container">
        <h1 className="customer-dashboard-title">Customer Dashboard</h1>
        <ul className="customer-dashboard-list">
          <li className="customer-dashboard-list-item">
            <a href="/prepaid-plans" className="customer-dashboard-link">
              Prepaid Plans
            </a>
          </li>
          <li className="customer-dashboard-list-item">
            <a href="/postpaid-plans" className="customer-dashboard-link">
              Postpaid Plans
            </a>
          </li>
          <li className="customer-dashboard-list-item">
            <a href="/addons" className="customer-dashboard-link">
              Add-ons
            </a>
          </li>
          <li className="customer-dashboard-list-item">
            <a href="/recharge-history" className="customer-dashboard-link">
              Recharge History
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
};

export default CustomerDashboard;
