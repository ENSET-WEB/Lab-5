import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:5000/users", {
        params: { username: formData.username, password: formData.password },
      });
      if (response.data.length > 0) {
        setMessage("Login successful!");

        login({
          username: formData.username,
        });
        navigate("/home");
      } else {
        setMessage("Invalid credentials.");
      }
    } catch (error) {
      setMessage("Login failed. Try again.");
    }
  };

  return (
    <div className="principal">
      <div className="LoginDiv">
        <h1>Welcome</h1>
        <h3>Login to Your Account</h3>
        <form className="LoginCredentials" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            className="LoginInput"
            type="text"
            id="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            className="LoginInput"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          <input type="submit" value="Login" className="LoginSubmit" />
        </form>
        Don't have an account? <a href="/signup">Signup</a>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Login;
