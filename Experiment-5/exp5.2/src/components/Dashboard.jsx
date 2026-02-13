import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";

const Dashboard = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // simple loading delay

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="app-container">
      <header className="navbar-stack">
        <h1>MyPortfolio</h1>

        <nav>
          <ul className="nav-tabs">
            <li>
              <NavLink
                to="info"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Profile
              </NavLink>
            </li>

            <li>
              <NavLink
                to="skills"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Skills
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-view">
        <div className="tab-card">
          {loading ? (
            <div style={{ padding: "40px", textAlign: "center" ,color:"black"}}>
              Loading...
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
