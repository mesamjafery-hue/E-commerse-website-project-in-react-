import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "../styles/Products.css";

const Products = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const searchMatch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="products-page">
      <section className="page-header bg-light py-4 mb-5">
        <div className="container">
          <h1 className="fw-bold">Our Products</h1>
          <p className="text-muted">Browse our complete collection of quality items</p>
        </div>
      </section>

      <div className="container mb-5">
        <div className="row">
          {/* Sidebar Filters */}
          <div className="col-md-3 mb-4">
            <div className="filter-section">
              <h5 className="fw-bold mb-3">Search</h5>
              <input
                type="text"
                className="form-control mb-4"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <h5 className="fw-bold mb-3">Categories</h5>
              <div className="category-list">
                {categories.map((category) => (
                  <div key={category} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="category"
                      id={category}
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor={category}>
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="col-md-9">
            {filteredProducts.length > 0 ? (
              <>
                <div className="results-info mb-4">
                  <p className="text-muted">
                    Showing <strong>{filteredProducts.length}</strong> product
                    {filteredProducts.length !== 1 ? "s" : ""}
                  </p>
                </div>
                <div className="products-flex-container">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="product-flex-item">
                      <ProductCard
                        product={product}
                        onAddToCart={onAddToCart}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="alert alert-info text-center py-5">
                <h5>No products found</h5>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
