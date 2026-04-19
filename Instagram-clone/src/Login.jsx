import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    

if (username === "muthu" && password === "1234") {
  navigate("/home");   // ✅ best for your setup
}
  };

  return (
    <div className="login-container">
      <div className="login-box">
        
        <h1 className="logo">Instagram</h1>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={handleLogin}>Login</button>
        </form>

        <div className="divider">OR</div>

        <p className="forgot">Forgot password?</p>

      </div>
    </div>
  );
};

export default Login;