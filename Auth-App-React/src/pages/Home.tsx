import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Home.css";

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="HomeTitle">
          <h1>Authentication Application</h1>
        </div>
        <div className="HomeUser">
          <h3>{user?.username} </h3>
          <button className="Logoutbtn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="content">
        <aside className="sidebar">
          <ul>
            <li>Dashboard</li>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </aside>
        <main className="main-content">
          <h2>Home Page</h2>
          <p>Home page content</p>
        </main>
      </div>
    </div>
  );
};

export default Home;
