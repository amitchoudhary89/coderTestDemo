import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../actions/api";

export default function App() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = () => {
    const check = loginUser(userName, pass);
    if (check.length) {
      setError("");
      localStorage.setItem("loggedInUser", JSON.stringify(check[0]));
      if (check[0].role === "user") {
        navigate(`details/${check[0].objectId}`);
      } else {
        navigate("users");
      }
    } else {
      setError("Invalid Credentials / User Not Found");
    }
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <div className="login">
        <h4>{error}</h4>
        <input
          placeholder="Username"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
