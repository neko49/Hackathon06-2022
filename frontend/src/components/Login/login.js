import React, { useState } from "react";
import axios from "axios";
import "./logstyle.css";

const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${process.env.REACT_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    });
  };

  return (
    <div className="login-page">
      <div className="log-container">
        <h1 className="header">Saagie</h1>
        <br />
        <div className="log-input">
          <form action="" onSubmit={handleLogin} id="sign-up-form">
            <div className="titre">
              <label htmlFor="email">Username</label>
            </div>

            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="email error"></div>
            <br />
            <div className="titre">
              <label htmlFor="password">Mot de passe</label>
            </div>
            <div className="password">
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button
                type="button"
                className="password-button"
                aria-label="Show password"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-slash"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                </svg>
              </button>
            </div>
            <div className="password error"></div>
            <br />
            <div className="bottom-grid">
              <div className="forgot">
                <a href="https://demo-workspace.a4.saagie.io/forgot-password">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="login-button" onClick="">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Log;
