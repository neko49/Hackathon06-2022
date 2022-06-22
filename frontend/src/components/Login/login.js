import React, { useState } from "react";
import axios from "axios";
import "./logstyle.css";
import config from "../../config/config";
import { useRecoilState } from "recoil";
import authenticationState from "../../atoms/authentication.atom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const initialCredentials = {
  username: "",
  password: "",
};

const Log = () => {
  const [authentication, setAuthentication] =
    useRecoilState(authenticationState);
  const [credentials, setCredentials] = useState({});
  const [error, setError] = useState("");

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eye);
  const handleToggle = (e) => {
    e.preventDefault();
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleCredentials = (e) => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(
        config.BACKEND_URL + "/auth/login",
        {
          login: credentials.username,
          password: credentials.password,
        },
        {
          headers: {
            "Content-type": "application/json",
            "Saagie-Realm": "demo",
          },
        }
      )
      .then((response) => {
        //authentification OK
        if (response?.data?.jwt) {
          localStorage.setItem("jwt", JSON.stringify(response.data.jwt));
          setAuthentication(response.data.jwt);
        } else {
          setError("Mot de passe incorrect!");
          setTimeout(() => {
            setError("");
          }, 5000);
          console.error("Unknown error");
        }
        console.log(response.data);
      })
      .catch((err) => {
        //authentification fail
        setError("Mot de passe incorrect!");
        setTimeout(() => {
          setError("");
        }, 5000);
        console.error(err);
      });

    /*axios({
          method: "post",
          url: `${process.env.REACT_API_URL}/auth/login`,
          withCredentials: true,
          data: {
            email,
            password,
          },
        });*/
  };

  return (
    <div className="login-page">
      <div className="log-container">
        <h1 className="header">Saagie</h1>
        <br />
        <div className="log-input">
          <form action="" onSubmit={handleLogin} id="sign-up-form">
            <div className="titre">
              <label htmlFor="username">Username</label>
            </div>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleCredentials}
              value={credentials?.username}
            />
            <div className="username error"></div>
            <br />
            <div className="titre">
              <label htmlFor="password">Mot de passe</label>
            </div>
            <div className="password">
              <input
                type={type}
                name="password"
                id="password"
                onChange={handleCredentials}
                value={credentials?.password}
              />
              <button
                type="button"
                className="password-button"
                aria-label="Show password"
                onClick={handleToggle}
              >
                <span>
                  <Icon icon={icon} />
                </span>
              </button>
            </div>
            <div className="password-error">{error}</div>
            <br />
            <div className="bottom-grid">
              <div className="forgot">
                <a href="https://demo-workspace.a4.saagie.io/forgot-password">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="login-button">
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
