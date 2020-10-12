import React from "react";

const Input = props => {
  return (
    <>
      <input
        type="text"
        value={props.value}
        onChange={ event => console.log("value changed!")}
      />
    </>
  );
};

export default Input;