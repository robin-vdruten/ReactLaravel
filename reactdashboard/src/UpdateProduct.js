import { WithRouter, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Header from "./Header";

function UpdateProduct() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [fileBase64String, setFileBase64String] = useState([]);

  function saveFile(e) {
    setFile(e.target.files[0]);
  }

  useEffect(() => {
    async function showProduct() {
      let result = await fetch("http://localhost:8000/api/product/" + id);
      result = await result.json();
      setData(result);
      setName(result.name);
      setPrice(result.price);
      setDescription(result.discription);
    }
    showProduct();
  }, []);

  async function editProduct(id) {
    setFileBase64String(encodeFileBase64(file));

    console.log(fileBase64String);

    const formdata = new FormData();
    formdata.append("file", fileBase64String);
    formdata.append("price", price);
    formdata.append("name", name);
    formdata.append("description", description);

    let result = await fetch(
      "http://localhost:8000/api/updateproduct/" + id + "?_method=PUT",
      {
        method: "POST",
        body: formdata,
      }
    );
  }

  function encodeFileBase64(file) {
    let reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        let Base64 = reader.result;
        setFileBase64String(Base64);
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
        <h1>update Page</h1>
        <input
          type="text"
          name="name"
          defaultValue={data.name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          className="form-control"
        />
        <br />
        <input
          type="text"
          name="price"
          defaultValue={data.price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
          className="form-control"
        />
        <br />
        <input
          type="text"
          name="description"
          defaultValue={data.description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
          className="form-control"
        />
        <br />
        <input
          type="file"
          name="file"
          onChange={saveFile}
          placeholder="file"
          className="form-control"
        />
        <br />
        <img style={{ marginBottom: 20, width: 150 }} src={data.file} />
        <br />
        <button
          onClick={() => {
            editProduct(data.id);
          }}
          className="btn btn-primary"
        >
          update
        </button>
      </div>
    </div>
  );
}

export default UpdateProduct;
