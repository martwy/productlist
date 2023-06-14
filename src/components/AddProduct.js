import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import $ from "jquery";

import { AppContext } from "../App";
import { API_URL } from "../utils/constants";
import FormInput from "./FormInput";
const AddProduct = () => {
  const navigate = useNavigate();
  const { products, update } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({ shouldUnregister: true });

  const productType = watch("productType");

  async function onSubmit(data) {
    if (products.map((p) => p.sku).includes(data.sku)) {
      setError("sku", { type: "exists", message: "Sku already exixts" });
      return;
    }

    try {
      await $.post(API_URL, data);
      navigate("/");
      update();
    } catch (error) {
      console.error(error);
    }
  }

  const formProducts = [
    {
      uid: 0,
      label: "SKU",
      id: "sku",
      name: "sku",
      type: "text",
    },
    {
      uid: 1,
      label: "Name",
      id: "name",
      name: "name",
      type: "text",
    },
    {
      uid: 2,
      label: "Price",
      id: "price",
      name: "price",
      type: "number",
      step: "0.01",
    },
    {
      uid: 3,
      productType: "Dvd",
      label: "Size (MB)",
      id: "size",
      name: "size",
      type: "number",
      info: "Please provide size in MB",
    },
    {
      uid: 4,
      productType: "Book",
      label: "Weight (KG)",
      id: "weight",
      name: "weight",
      type: "number",
      info: "Please provide weight of books in KG",
    },
    {
      uid: 5,
      productType: "Furniture",
      label: "Height (CM)",
      id: "height",
      name: "height",
      type: "number",
    },
    {
      uid: 6,
      productType: "Furniture",
      label: "Width (CM)",
      id: "width",
      name: "width",
      type: "number",
    },
    {
      uid: 7,
      productType: "Furniture",
      label: "Length (CM)",
      id: "length",
      name: "length",
      type: "number",
      info: "Please provide dimensions in HxWxL format",
    },
  ];

  const productForm = [...formProducts]
    .filter((type) => !type.productType)
    .map((form) => (
      <FormInput
        key={form.uid}
        label={form.label}
        id={form.id}
        name={form.name}
        type={form.type}
        register={register}
        error={errors}
        step={form.step}
      />
    ));

  const AttrForm = [...formProducts]
    .filter((type) => type.productType === productType && type.uid > 2)
    .map((form, index) => (
      <>
        <FormInput
          key={form.uid}
          label={form.label}
          id={form.id}
          name={form.name}
          type={form.type}
          register={register}
          error={errors}
        />
        <b key={index}>{form.info}</b>
      </>
    ));

  return (
    <div className="productForm">
      <form id="product_form" onSubmit={handleSubmit(onSubmit)}>
        {productForm}
        <label className="labelSpace">
          Type Switcher
          <select
            id="productType"
            name="productType"
            {...register("productType", {
              required: "Please, submit required data",
            })}
          >
            <option></option>
            <option value="Dvd">DVD</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture</option>
          </select>
        </label>
        {errors.productType && (
          <p className="error">{errors.productType?.message}</p>
        )}
        {AttrForm}
      </form>
    </div>
  );
};

export default AddProduct;
