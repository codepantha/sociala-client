import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  const username = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // register
    const register = async () => {
      try {
        await axios.post("/auth/register", {
          email: email.current.value,
          password: password.current.value,
          confirmPassword: confirmPassword.current.value,
          username: username.current.value
        });
        setSuccess(true);
      } catch (e) {
        console.log(e);
      }
    };

    if (password.current.value === confirmPassword.current.value) {
      // register user and redirect to the login page
      register();
      setTimeout(() => {
        history('/');
      }, 2000);
    }
    else setError("passwords do not match");
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Sociala</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Sociala.
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleSubmit} method="POST" className="loginBox">
            {success ? (
              <p className="success">
                "User registration successful!"<br />
                "Redirecting..."
              </p>
            ) : <p>{error}</p>}

            <input
              ref={username}
              type="text"
              required
              placeholder="Username"
              className="loginInput"
            />
            <input
              ref={email}
              type="email"
              required
              placeholder="Email"
              className="loginInput"
            />
            <input
              ref={password}
              type="password"
              minLength="6"
              required
              placeholder="Password"
              className="loginInput"
            />
            <input
              ref={confirmPassword}
              type="password"
              minLength="6"
              required
              placeholder="Password Again"
              className="loginInput"
            />
            <button type="submit" className="loginButton">
              Sign Up
            </button>
            <Link to="/" className="loginRegisterButton">Log into Account</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
