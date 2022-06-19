import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";
function Protected(props) {
  let Cmp = props.Cmp;
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userinfo")) {
      navigate("/register");
    }
  }, []);
  return (
    <div>
      <Cmp />
    </div>
  );
}

export default Protected;
