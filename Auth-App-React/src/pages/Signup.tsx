import "./Signup.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/users",
        formData
      );
      if (response.status === 201) {
        setMessage("Signup successful!");
        navigate("/login");
      }
    } catch (error) {
      setMessage("Signup failed. Try again.");
    }
  };

  return (
    <div className="principal">
      <div className="SignupDiv">
        <h1>Create an Account</h1>
        <h3>Sign up to get started</h3>
        <form className="Credentials" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            className="SignupInput"
            type="text"
            id="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            className="SignupInput"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            className="SignupInput"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          <input type="submit" value="Sign Up" className="SignupSubmit" />
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Signup;
