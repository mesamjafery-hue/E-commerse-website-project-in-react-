import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          🛒 ShopHub
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={() => setIsOpen(false)}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin" onClick={() => setIsOpen(false)}>
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart" onClick={() => setIsOpen(false)}>
                Cart
                {cartCount > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
