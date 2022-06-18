import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.js";
import Login from "./Login.js";
import Register from "./Register.js";
import AddProduct from "./AddProduct.js";
import UpdateProduct from "./UpdateProduct.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>Project</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
