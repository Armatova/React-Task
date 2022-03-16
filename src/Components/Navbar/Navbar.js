import React from "react";

const Navbar = ({ clothes }) => {
  console.log(clothes);
  return (
    <div>
      {clothes.map((item) => (
        <strong
          style={{
            margin: "10px",
            cursor: "pointer",
            color: "black",
            fontSize: "25px",
          }}
          key={item.id}
        >
          {item.model}
        </strong>
      ))}
    </div>
  );
};

export default Navbar;
