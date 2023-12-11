/* eslint-disable react/prop-types */
import React from "react";

const CustomInputComponent = ({
  select,
  lable,
  children,
  handleChange,
  ...otherProps
}) => {
  return (
    <div className="group">
      <label htmlFor="From">{lable}</label>
      {select ? (
        <input onChange={handleChange} {...otherProps} />
      ) : (
        <select>{children}</select>
      )}
    </div>
  );
};

export default CustomInputComponent;
