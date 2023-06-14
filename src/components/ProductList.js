import React, { useContext } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { AppContext } from "../App";

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const appData = useContext(AppContext);
  const { products } = appData;

  function handleChange(e) {
    const { value, checked } = e.target;
    const selectedIds = JSON.parse(searchParams.get("selectedIds")) || [];
    updateSelectedProductIds(
      checked
        ? [...selectedIds, value]
        : selectedIds.filter((id) => id !== value)
    );
  }

  function updateSelectedProductIds(newIds) {
    setSearchParams(
      createSearchParams({
        selectedIds: JSON.stringify(newIds),
      })
    );
  }

  return (
    <div className="productList">
      {products.map((product) => (
        <div key={product.id} className="productBox">
          <div className="checkboxInput">
            <input
              type="checkbox"
              name="delete-checkbox"
              className="delete-checkbox"
              onChange={handleChange}
              value={product.id}
            />
          </div>
          <div className="productSpace">
            <p>{product.sku}</p>
            <p>{product.name}</p>
            <p>{product.price} $</p>
            <p>{product.attr}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
