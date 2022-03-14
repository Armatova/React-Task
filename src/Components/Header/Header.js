import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = (props) => {
  console.log(props);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={props.logo} width="200px" alt="logo" />
      <Navbar clothes={props.clothes} />
    </div>
  );
};

export default Header;
