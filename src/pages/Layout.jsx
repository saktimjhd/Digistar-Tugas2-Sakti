import { Outlet, Link } from "react-router-dom";
import "../App.css";

const Layout = ({ isLoggedIn, handleAuth }) => {
  return (
    <div className="App">
      <nav className="topnav">
        <div>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/product">
              <li>Product</li>
            </Link>
            {isLoggedIn && (
              <>
                <Link to="/dashboard">
                  <li>Dashboard</li>
                </Link>
                <Link to="/user">
                  <li>User Profile</li>
                </Link>
              </>
            )}
          </ul>

          <button onClick={handleAuth}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </nav>

      {/* Outlet renders the current route's component */}
      <Outlet />
    </div>
  );
};

export default Layout;
