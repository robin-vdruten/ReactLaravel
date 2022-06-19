import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";
function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userinfo")) {
      navigate("/add");
    }
  }, []);

  async function login() {
    console.log(email, password);
    let user = { email, password };
    try {
      let result = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      });

      result = await result.json();
      if (!result.error) {
        localStorage.setItem("userinfo", JSON.stringify(result));
        navigate("/add");
      } else {
        setError(JSON.stringify(result.error));
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>login Page</h1>
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="email"
          className="form-control"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="password"
          className="form-control"
        />
        <br />
        <button onClick={login} className="btn btn-primary">
          login
        </button>
        <div class="error">{error}</div>
      </div>
    </div>
  );
}

export default Login;
