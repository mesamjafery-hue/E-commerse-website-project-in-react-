import products from "../data/products";
import "../styles/DashboardHome.css";

const DashboardHome = () => {
  const totalProducts = products.length;
  const totalOrders = 1234;
  const totalUsers = 5678;
  const totalRevenue = 45200;

  return (
    <div className="dashboard-home">
      {/* Stats Cards */}
      <div className="row g-4 mb-5">
        <div className="col-md-6 col-lg-3">
          <div className="stat-card bg-blue shadow-sm rounded-3">
            <div className="stat-icon">📦</div>
            <div className="stat-info">
              <h6 className="text-muted mb-1">Total Products</h6>
              <h3 className="fw-bold mb-0">{totalProducts}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="stat-card bg-green shadow-sm rounded-3">
            <div className="stat-icon">🛒</div>
            <div className="stat-info">
              <h6 className="text-muted mb-1">Total Orders</h6>
              <h3 className="fw-bold mb-0">{totalOrders.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="stat-card bg-purple shadow-sm rounded-3">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <h6 className="text-muted mb-1">Total Users</h6>
              <h3 className="fw-bold mb-0">{totalUsers.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="stat-card bg-orange shadow-sm rounded-3">
            <div className="stat-icon">💰</div>
            <div className="stat-info">
              <h6 className="text-muted mb-1">Revenue</h6>
              <h3 className="fw-bold mb-0">${totalRevenue.toLocaleString()}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-light p-3 border-bottom">
              <h5 className="fw-bold mb-0">Recent Sales</h5>
            </div>
            <div className="card-body p-0">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#ORD001</td>
                    <td>John Doe</td>
                    <td>$299.99</td>
                    <td>
                      <span className="badge bg-success">Completed</span>
                    </td>
                    <td>Feb 28, 2026</td>
                  </tr>
                  <tr>
                    <td>#ORD002</td>
                    <td>Jane Smith</td>
                    <td>$149.99</td>
                    <td>
                      <span className="badge bg-warning">Pending</span>
                    </td>
                    <td>Feb 27, 2026</td>
                  </tr>
                  <tr>
                    <td>#ORD003</td>
                    <td>Mike Johnson</td>
                    <td>$459.99</td>
                    <td>
                      <span className="badge bg-success">Completed</span>
                    </td>
                    <td>Feb 27, 2026</td>
                  </tr>
                  <tr>
                    <td>#ORD004</td>
                    <td>Sarah Williams</td>
                    <td>$199.99</td>
                    <td>
                      <span className="badge bg-info">Processing</span>
                    </td>
                    <td>Feb 26, 2026</td>
                  </tr>
                  <tr>
                    <td>#ORD005</td>
                    <td>Tom Brown</td>
                    <td>$349.99</td>
                    <td>
                      <span className="badge bg-success">Completed</span>
                    </td>
                    <td>Feb 26, 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Top Categories */}
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-header bg-light p-3 border-bottom">
              <h5 className="fw-bold mb-0">Top Categories</h5>
            </div>
            <div className="card-body">
              <div className="category-item d-flex justify-content-between align-items-center mb-3">
                <span>Electronics</span>
                <span className="badge bg-primary">35%</span>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar" style={{ width: "35%" }}></div>
              </div>

              <div className="category-item d-flex justify-content-between align-items-center mb-3">
                <span>Fashion</span>
                <span className="badge bg-success">25%</span>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar bg-success" style={{ width: "25%" }}></div>
              </div>

              <div className="category-item d-flex justify-content-between align-items-center mb-3">
                <span>Sports</span>
                <span className="badge bg-warning">25%</span>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar bg-warning" style={{ width: "25%" }}></div>
              </div>

              <div className="category-item d-flex justify-content-between align-items-center mb-3">
                <span>Home</span>
                <span className="badge bg-info">15%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-info" style={{ width: "15%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
