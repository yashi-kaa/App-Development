import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  return (
    <div className="ros">
      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          <h1 className="dashboard-title">Admin Dashboard</h1>
          <ul className="dashboard-list">
            <li className="dashboard-list-item">
              <Link to="/admin/prepaid-plans" className="dashboard-link">
                Prepaid Plans
              </Link>
            </li>
            <li className="dashboard-list-item">
              <Link to="/admin/postpaid-plans" className="dashboard-link">
                Postpaid Plans
              </Link>
            </li>
            <li className="dashboard-list-item">
              <Link to="/admin/add-plan" className="dashboard-link">
                Add-ons
              </Link>
            </li>
            <li className="dashboard-list-item">
              <Link to="/admin/recharge-history" className="dashboard-link">
                Recharge History
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
