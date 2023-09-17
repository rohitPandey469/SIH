import { useState } from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../action/auth";
import leftImg from "../../assets/imageLeft.png"

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username && !password) {
      return alert("Enter username and password");
    }
    // dispatch(auth({ username, password }, navigate));
  };

  return (
    <section className="auth-section">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <h4>Username</h4>
          <input
            type="email"
            name="email"
            id="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
          />
        </label>
        <label htmlFor="password">
          <div>
            <h4>Password</h4>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" className="auth-btn">
          Register
        </button>
      </form>
      <p></p>
    </section>
  );
};

export default Auth;
