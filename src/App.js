import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import $ from "jquery";

import { API_URL } from "./utils/constants";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import "./App.scss";

export const AppContext = createContext();

const App = () => {
  const [products, setProducts] = useState([]);

  async function update() {
    try {
      const data = await $.getJSON(API_URL);
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    update();
  }, []);

  return (
    <Router>
      <AppContext.Provider value={{ products, setProducts, update }}>
        <div className="container">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route exact path="/add-product" element={<AddProduct />} />
          </Routes>
          <Footer />
        </div>
      </AppContext.Provider>
    </Router>
  );
};

export default App;
