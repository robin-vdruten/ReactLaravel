import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header.js";

function SearchProduct() {
  const [data, setData] = useState([]);

  async function search(key) {
    if (!key) {
      key = "search";
    }
    let result = await fetch("http://localhost:8000/api/search/" + key);
    result = await result.json();
    setData(result);
  }

  async function deleteAction(id) {
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    console.log(result);
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Search Product</h1>
        <br />
        <input
          type="text"
          onChange={(e) => search(e.target.value)}
          className="form-control"
          placeholder="Search Product"
        />
        <Table>
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>price</td>
              <td>Description</td>
              <td>Image</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <img style={{ width: 100 }} src={item.file} />
                </td>
                <td>
                  <span
                    onClick={() => deleteAction(item.id)}
                    className="delete"
                  >
                    Delete
                  </span>
                </td>
                <td>
                  <Link className="a" to={"/update/" + item.id}>
                    <span className="update">Update</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default SearchProduct;
