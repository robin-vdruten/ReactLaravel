import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login.js";
import Register from "./Register.js";
import AddProduct from "./AddProduct.js";
import UpdateProduct from "./UpdateProduct.js";
import Protected from "./Protected.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/add"
            element={<Protected Cmp={AddProduct} /> /*(<AddProduct />))*/}
          />
          <Route
            path="/update"
            element={<Protected Cmp={UpdateProduct} /> /*<UpdateProduct />)) */}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
