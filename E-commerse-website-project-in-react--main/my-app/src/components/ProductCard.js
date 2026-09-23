import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card product-card h-100 shadow-sm">
      <div className="product-image-container">
        <a href={product.image} target="_blank" rel="noopener noreferrer">
          <img
            src={product.image}
            className="card-img-top product-image"
            alt={product.name}
          />
        </a>
        <span className="badge bg-warning position-absolute top-0 end-0 m-2">
          {product.category}
        </span>
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title product-name">{product.name}</h5>
        <p className="card-text text-muted flex-grow-1">{product.description}</p>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="h5 mb-0 text-primary">${product.price}</span>
          <div className="rating">
            <small className="text-warning">★ {product.rating}</small>
            <small className="text-muted ms-1">({product.reviews})</small>
          </div>
        </div>
        <div className="d-grid gap-2">
          <Link to={`/product/${product.id}`} className="btn btn-outline-primary btn-sm">
            View Details
          </Link>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
