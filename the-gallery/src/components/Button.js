import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="button curtaindown">{name}</button>
    </div>
  );
};
Button.defaultProps = { name: "Submit" };

export default Button;