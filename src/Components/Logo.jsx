import React from "react";

const Logo = ({ width = "100px" }) => {
  return (
    <div>
      <img src="./public/img/logo.png" width={width} alt="" />{" "}
    </div>
  );
};

export default Logo;
