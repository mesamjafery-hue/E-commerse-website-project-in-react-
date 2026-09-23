import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="sidebar bg-dark text-white h-100">
      <div className="sidebar-header p-4">
        <h5 className="fw-bold">📊 Admin Panel</h5>
      </div>
      <nav className="sidebar-nav">
        <Link
          className={`sidebar-link ${activeTab === "dashboard" ? "active" : ""}`}
          to="#"
          onClick={() => setActiveTab("dashboard")}
        >
          <i className="bi bi-speedometer2"></i> Dashboard
        </Link>
        <Link
          className={`sidebar-link ${activeTab === "products" ? "active" : ""}`}
          to="#"
          onClick={() => setActiveTab("products")}
        >
          <i className="bi bi-shop"></i> Products
        </Link>
        <Link
          className={`sidebar-link ${activeTab === "orders" ? "active" : ""}`}
          to="#"
          onClick={() => setActiveTab("orders")}
        >
          <i className="bi bi-cart-check"></i> Orders
        </Link>
        <Link
          className={`sidebar-link ${activeTab === "users" ? "active" : ""}`}
          to="#"
          onClick={() => setActiveTab("users")}
        >
          <i className="bi bi-people"></i> Users
        </Link>
        <Link
          className={`sidebar-link ${activeTab === "settings" ? "active" : ""}`}
          to="#"
          onClick={() => setActiveTab("settings")}
        >
          <i className="bi bi-gear"></i> Settings
        </Link>
      </nav>
      <div className="sidebar-footer p-4 border-top">
        <Link to="/" className="btn btn-outline-light btn-sm w-100">
          Back to Store
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
