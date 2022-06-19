import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login.js";
import Register from "./Register.js";
import AddProduct from "./AddProduct.js";
import UpdateProduct from "./UpdateProduct.js";
import Protected from "./Protected.js";
import ProductList from "./ProductList.js";
import SearchProduct from "./SearchProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected Cmp={ProductList} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/search"
            element={<Protected Cmp={SearchProduct} /> /*(<AddProduct />))*/}
          />
          <Route
            path="/add"
            element={<Protected Cmp={AddProduct} /> /*(<AddProduct />))*/}
          />
          <Route
            path="/update/:id"
            element={<Protected Cmp={UpdateProduct} /> /*<UpdateProduct />)) */}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
