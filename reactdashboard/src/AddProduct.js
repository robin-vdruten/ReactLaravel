import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";

function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [fileBase64String, setFileBase64String] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };

  async function addProduct() {
    console.log(name, file, description, price);
    try {
      encodeFileBase64(file);

      const formdata = new FormData();
      formdata.append("file", fileBase64String);
      formdata.append("price", price);
      formdata.append("name", name);
      formdata.append("description", description);

      let result = await fetch("http://localhost:8000/api/addproduct", {
        method: "POST",
        body: formdata,
      });
    } catch (e) {
      alert("Error");
    }
  }

  function encodeFileBase64(file) {
    let reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        let Base64 = reader.result;
        setFileBase64String(Base64);
        console.log(fileBase64String);
      };
      reader.onerror = (error) => {
        console.log("error: ", error);
      };
    }
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>addproduct Page</h1>
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
          type="file"
          onChange={saveFile}
          name="file"
          placeholder="email"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          name="price"
          placeholder="price"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          placeholder="description"
          className="form-control"
        />
        <br />
        <button onClick={addProduct} className="btn btn-primary">
          add
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
