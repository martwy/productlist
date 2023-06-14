import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MassDelete from "./MassDelete";

const NavBar = () => {
  return (
    <div className="navBarMenu">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <div className="navBarText">
                <b>Product List</b>
              </div>
              <div className="navBarMenuButtons">
                <button>
                  <Link to="add-product">ADD</Link>
                </button>
                <MassDelete />
              </div>
            </>
          }
        />
        <Route
          exact
          path="/add-product"
          element={
            <>
              <div className="navBarText">
                <b>Product Add</b>
              </div>
              <div className="navBarMenuButtons">
                <button form="product_form" type="submit">
                  Save
                </button>
                <button>
                  <Link to="/">Cancel</Link>
                </button>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default NavBar;
