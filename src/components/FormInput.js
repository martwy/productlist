import React from "react";

const FormInput = ({ label, id, name, type, register, error, step }) => {
  return (
    <>
      <label className="labelSpace">
        {label}
        <input
          id={id}
          name={name}
          type={type}
          step={step}
          {...register(name, { required: "Please, submit required data" })}
        />
      </label>
      {error[id] && <p className="error">{error[id].message}</p>}
    </>
  );
};

export default FormInput;
