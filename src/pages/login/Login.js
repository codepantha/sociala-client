import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth";
import "./login.css";

export default function Login() {
  const email = useRef('');
  const password = useRef('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {email: email.current.value, password: password.current.value};
    dispatch(login(user))
  }
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
          <form method="POST" onSubmit={handleSubmit} className="loginBox">
            <input 
              type="email"
              required
              placeholder="Email" 
              ref={email} 
              className="loginInput" 
            />
            <input 
              type="password" 
              required
              minLength="6"
              placeholder="Password" 
              ref={password} 
              className="loginInput" 
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}