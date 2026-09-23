import { useState } from "react";
import products from "../data/products";
import "../styles/ProductTable.css";

const ProductTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-table-section">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold mb-0">Product Management</h3>
        <button className="btn btn-primary btn-sm">
          + Add New Product
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Products Table */}
      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Reviews</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    <span className="badge bg-secondary">#{product.id}</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "4px",
                        }}
                      />
                      <span className="fw-bold">{product.name}</span>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-info">{product.category}</span>
                  </td>
                  <td>
                    <span className="text-primary fw-bold">
                      ${product.price}
                    </span>
                  </td>
                  <td>
                    <div className="text-warning">
                      {"★".repeat(Math.round(product.rating))}
                      {"☆".repeat(5 - Math.round(product.rating))}
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-success">{product.reviews}</span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      ✎ Edit
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProducts.length === 0 && (
          <div className="p-4 text-center text-muted">
            <p>No products found matching your search</p>
          </div>
        )}

        <div className="card-footer bg-light p-3">
          <p className="mb-0 text-muted small">
            Showing <strong>{filteredProducts.length}</strong> of{" "}
            <strong>{products.length}</strong> products
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
