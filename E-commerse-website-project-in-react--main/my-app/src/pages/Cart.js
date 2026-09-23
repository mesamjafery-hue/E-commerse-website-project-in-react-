import { Link } from "react-router-dom";
import "../styles/Cart.css";

const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity, onClearCart }) => {
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const calculateSubtotal = () => {
    return calculateTotal();
  };

  const shippingCost = calculateTotal() > 50 ? 0 : 9.99;
  const tax = (calculateSubtotal() * 0.08).toFixed(2);
  const total = (parseFloat(calculateSubtotal()) + shippingCost + parseFloat(tax)).toFixed(2);

  return (
    <div className="cart-page">
      {/* Page Header */}
      <section className="page-header bg-light py-4 mb-5">
        <div className="container">
          <h1 className="fw-bold">Shopping Cart</h1>
          <p className="text-muted">Review and manage your items</p>
        </div>
      </section>

      <div className="container mb-5">
        {cartItems.length === 0 ? (
          <div className="alert alert-info text-center py-5">
            <h4 className="mb-3">Your cart is empty</h4>
            <p className="text-muted mb-4">Add some products to get started!</p>
            <Link to="/products" className="btn btn-primary btn-lg">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            {/* Cart Items */}
            <div className="col-lg-8">
              <div className="card shadow-sm">
                <div className="card-header bg-light p-3 border-bottom">
                  <h5 className="fw-bold mb-0">
                    Cart Items ({cartItems.length})
                  </h5>
                </div>
                <div className="card-body">
                  {cartItems.map((item, index) => (
                    <div key={index} className="cart-item border-bottom pb-3 mb-3">
                      <div className="row align-items-center">
                        <div className="col-md-2 col-sm-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-fluid rounded"
                          />
                        </div>
                        <div className="col-md-5 col-sm-9">
                          <Link
                            to={`/product/${item.id}`}
                            className="text-decoration-none text-dark fw-bold"
                          >
                            {item.name}
                          </Link>
                          <p className="text-muted small mb-0">{item.category}</p>
                          <p className="text-primary fw-bold mb-0">
                            ${item.price}
                          </p>
                        </div>
                        <div className="col-md-3 col-sm-6">
                          <div className="input-group">
                            <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() =>
                                item.quantity > 1 &&
                                onUpdateQuantity(
                                  index,
                                  item.quantity - 1
                                )
                              }
                            >
                              −
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center"
                              value={item.quantity}
                              onChange={(e) =>
                                onUpdateQuantity(index, parseInt(e.target.value) || 1)
                              }
                              min="1"
                            />
                            <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() =>
                                onUpdateQuantity(index, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-6 text-end">
                          <p className="fw-bold mb-2">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => onRemoveFromCart(index)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Continue Shopping */}
              <div className="mt-4">
                <Link to="/products" className="btn btn-outline-primary">
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4">
              <div className="card shadow-sm position-sticky" style={{ top: "20px" }}>
                <div className="card-header bg-light p-3 border-bottom">
                  <h5 className="fw-bold mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal:</span>
                      <span>${calculateSubtotal()}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Shipping:</span>
                      <span className={shippingCost === 0 ? "text-success fw-bold" : ""}>
                        {shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Tax (8%):</span>
                      <span>${tax}</span>
                    </div>
                  </div>

                  <div className="border-top pt-3 mb-4">
                    <div className="d-flex justify-content-between gap-2">
                      <h5 className="fw-bold mb-0">Total:</h5>
                      <h5 className="text-primary fw-bold mb-0">${total}</h5>
                    </div>
                  </div>

                  {calculateSubtotal() <= 50 && (
                    <div className="alert alert-info small mb-3">
                      Add ${(50 - parseFloat(calculateSubtotal())).toFixed(2)} more
                      for free shipping!
                    </div>
                  )}

                  <button className="btn btn-primary btn-lg w-100 mb-2">
                    Proceed to Checkout
                  </button>
                  <button
                    className="btn btn-outline-danger w-100"
                    onClick={onClearCart}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
