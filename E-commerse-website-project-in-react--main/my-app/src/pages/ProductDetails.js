import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import "../styles/ProductDetails.css";

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2 className="mb-4">Product Not Found</h2>
        <Link to="/products" className="btn btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    navigate("/cart");
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="product-details-page">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-light py-3">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/products">Products</Link>
            </li>
            <li className="breadcrumb-item active">{product.name}</li>
          </ol>
        </div>
      </nav>

      {/* Product Details */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Product Image */}
          <div className="col-md-6">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded shadow"
              />
              <span className="badge bg-warning">
                {product.category}
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="col-md-6">
            <div className="product-info">
              <h1 className="fw-bold mb-3">{product.name}</h1>

              {/* Rating */}
              <div className="rating-section mb-3">
                <div className="d-flex align-items-center">
                  <span className="text-warning me-2">
                    {"★".repeat(Math.round(product.rating))}
                    {"☆".repeat(5 - Math.round(product.rating))}
                  </span>
                  <span className="text-muted">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="price-section mb-4">
                <h2 className="text-primary fw-bold">${product.price}</h2>
              </div>

              {/* Description */}
              <p className="text-muted fs-5 mb-4">{product.description}</p>

              {/* Product Features */}
              <div className="features-section mb-4">
                <h5 className="fw-bold">Key Features:</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ High quality and durable</li>
                  <li className="mb-2">✓ Best price guarantee</li>
                  <li className="mb-2">✓ Free shipping on orders over $50</li>
                  <li className="mb-2">✓ 30-day money-back guarantee</li>
                </ul>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="action-section mb-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="quantity" className="form-label fw-bold">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      className="form-control"
                      min="1"
                      max="99"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value)))
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="button-group d-grid gap-2">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <Link to="/products" className="btn btn-outline-secondary btn-lg">
                  Continue Shopping
                </Link>
              </div>

              {/* Shipping Info */}
              <div className="shipping-info mt-4 p-3 bg-light rounded">
                <p className="mb-1">
                  <strong>✓ Free Shipping:</strong> On orders over $50
                </p>
                <p className="mb-1">
                  <strong>✓ Returns:</strong> 30-day return policy
                </p>
                <p className="mb-0">
                  <strong>✓ Support:</strong> 24/7 customer support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="related-products py-5 bg-light">
          <div className="container">
            <h3 className="fw-bold mb-4">Related Products</h3>
            <div className="row g-4">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="col-md-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={relatedProduct.image}
                      className="card-img-top"
                      alt={relatedProduct.name}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{relatedProduct.name}</h6>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-primary fw-bold">
                          ${relatedProduct.price}
                        </span>
                        <Link
                          to={`/product/${relatedProduct.id}`}
                          className="btn btn-sm btn-outline-primary"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
