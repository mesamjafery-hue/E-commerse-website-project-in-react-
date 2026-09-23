import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!isLogin && !formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      setSuccess(
        isLogin
          ? "Login successful! Redirecting..."
          : "Account created successfully! Redirecting..."
      );
      setTimeout(() => navigate("/"), 2000);
    } else {
      setErrors(newErrors);
      setSuccess("");
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    });
    setErrors({});
    setSuccess("");
  };

  return (
    <div className="login-page">
      <section className="login-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card shadow-lg border-0">
                {/* Header */}
                <div className="card-header bg-primary text-white text-center py-4">
                  <h2 className="fw-bold mb-0">
                    {isLogin ? "Welcome Back" : "Create Account"}
                  </h2>
                  <p className="text-white-50 mb-0 small">
                    {isLogin ? "Sign in to your account" : "Join our community"}
                  </p>
                </div>

                <div className="card-body p-4">
                  {/* Success Message */}
                  {success && (
                    <div className="alert alert-success" role="alert">
                      {success}
                    </div>
                  )}

                  {/* Form */}
                  <form onSubmit={handleSubmit}>
                    {/* Name Field (Signup Only) */}
                    {!isLogin && (
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-bold">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.name ? "is-invalid" : ""
                          }`}
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <div className="invalid-feedback">{errors.name}</div>
                        )}
                      </div>
                    )}

                    {/* Email Field */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>

                    {/* Password Field */}
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label fw-bold">
                        Password
                      </label>
                      <input
                        type="password"
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>

                    {/* Confirm Password Field (Signup Only) */}
                    {!isLogin && (
                      <div className="mb-3">
                        <label
                          htmlFor="confirmPassword"
                          className="form-label fw-bold"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className={`form-control ${
                            errors.confirmPassword ? "is-invalid" : ""
                          }`}
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm your password"
                        />
                        {errors.confirmPassword && (
                          <div className="invalid-feedback">
                            {errors.confirmPassword}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Terms Checkbox (Signup Only) */}
                    {!isLogin && (
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="agreeTerms">
                          I agree to the terms and conditions
                        </label>
                        {errors.agreeTerms && (
                          <div className="invalid-feedback d-block">
                            {errors.agreeTerms}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn btn-primary w-100 fw-bold py-2 mb-3"
                    >
                      {isLogin ? "Sign In" : "Create Account"}
                    </button>
                  </form>

                  {/* Divider */}
                  <div className="d-flex align-items-center mb-3">
                    <hr className="flex-grow-1" />
                    <span className="text-muted px-2 small">or</span>
                    <hr className="flex-grow-1" />
                  </div>

                  {/* Social Login */}
                  <div className="d-grid gap-2 mb-3">
                    <button className="btn btn-outline-secondary btn-sm">
                      Continue with Google
                    </button>
                  </div>

                  {/* Toggle Mode */}
                  <div className="text-center">
                    <p className="text-muted mb-0">
                      {isLogin ? "Don't have an account? " : "Already have an account? "}
                      <button
                        type="button"
                        className="btn btn-link p-0 text-primary fw-bold"
                        onClick={toggleMode}
                      >
                        {isLogin ? "Sign up" : "Sign in"}
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              {/* Demo Credentials */}
              {isLogin && (
                <div className="alert alert-info mt-3 small">
                  <strong>Demo Account:</strong>
                  <br />
                  Email: demo@example.com
                  <br />
                  Password: password123
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
