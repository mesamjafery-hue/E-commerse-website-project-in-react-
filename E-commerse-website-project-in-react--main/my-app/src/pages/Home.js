import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section py-5 bg-gradient text-white text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Welcome to ShopHub</h1>
          <p className="lead mb-4">
            Discover amazing products at unbeatable prices. Shop the latest electronics,
            fashion, sports, and home essentials.
          </p>
          <Link to="/products" className="btn btn-light btn-lg me-2">
            Shop Now
          </Link>
          <button className="btn btn-outline-light btn-lg">Learn More</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Why Choose ShopHub?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">🚚</div>
                <h5 className="fw-bold">Fast Shipping</h5>
                <p className="text-muted">Quick and reliable delivery to your doorstep.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">💰</div>
                <h5 className="fw-bold">Best Prices</h5>
                <p className="text-muted">Competitive pricing on all products.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">🛡️</div>
                <h5 className="fw-bold">Secure Shopping</h5>
                <p className="text-muted">Safe and secure payment processing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Shop by Category</h2>
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <Link to="/products" className="category-link text-decoration-none">
                <div className="category-card text-center p-4 h-100 bg-white shadow-sm">
                  <div className="category-icon mb-3">📱</div>
                  <h5 className="fw-bold">Electronics</h5>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link to="/products" className="category-link text-decoration-none">
                <div className="category-card text-center p-4 h-100 bg-white shadow-sm">
                  <div className="category-icon mb-3">🏃</div>
                  <h5 className="fw-bold">Sports</h5>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link to="/products" className="category-link text-decoration-none">
                <div className="category-card text-center p-4 h-100 bg-white shadow-sm">
                  <div className="category-icon mb-3">👗</div>
                  <h5 className="fw-bold">Fashion</h5>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link to="/products" className="category-link text-decoration-none">
                <div className="category-card text-center p-4 h-100 bg-white shadow-sm">
                  <div className="category-icon mb-3">🏠</div>
                  <h5 className="fw-bold">Home</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="mb-4 fw-bold">Ready to Start Shopping?</h2>
          <p className="mb-4 lead">Browse thousands of products and find exactly what you need.</p>
          <Link to="/products" className="btn btn-light btn-lg">
            Explore Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
