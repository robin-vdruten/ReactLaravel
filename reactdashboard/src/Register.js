import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";

function Register() {
  useEffect(() => {
    if (localStorage.getItem("userinfo")) {
      navigate("/add");
    }
  }, []);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  async function signUp() {
    let user = { name, email, password };
    console.log(user);
    try {
      let result = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });

      result = await result.json();
      console.log("result", result);

      localStorage.setItem("userinfo", JSON.stringify(result));
      navigate("/add");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Register Page</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="name"
          className="form-control"
        />
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
        <button onClick={signUp} className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </>
  );
}

export default Register;
