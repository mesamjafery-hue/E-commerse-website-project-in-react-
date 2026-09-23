import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardHome from "../components/DashboardHome";
import ProductTable from "../components/ProductTable";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardHome />;
      case "products":
        return <ProductTable />;
      case "orders":
        return (
          <div className="content-section">
            <h3 className="fw-bold mb-4">Orders Management</h3>
            <div className="alert alert-info">
              <p>Orders management feature coming soon...</p>
            </div>
          </div>
        );
      case "users":
        return (
          <div className="content-section">
            <h3 className="fw-bold mb-4">Users Management</h3>
            <div className="alert alert-info">
              <p>Users management feature coming soon...</p>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="content-section">
            <h3 className="fw-bold mb-4">Settings</h3>
            <div className="alert alert-info">
              <p>Settings panel coming soon...</p>
            </div>
          </div>
        );
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="admin-dashboard d-flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="admin-content flex-fill">
        <div className="admin-header bg-white border-bottom p-4 shadow-sm">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2 className="fw-bold mb-1">Dashboard</h2>
              <p className="text-muted mb-0">Welcome back, Admin!</p>
            </div>
            <div className="admin-header-actions">
              <button className="btn btn-outline-primary btn-sm me-2">
                📊 Reports
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                👤 Profile
              </button>
            </div>
          </div>
        </div>
        <div className="admin-main p-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
