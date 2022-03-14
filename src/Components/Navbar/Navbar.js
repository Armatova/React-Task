import React from "react";

const Navbar = ({ clothes }) => {
  console.log(clothes);
  return (
    <div>
      {clothes.map((item) => (
        <strong style={{ margin: "10px", cursor: "pointer" }} key={item.id}>
          {item.model}
        </strong>
      ))}
    </div>
  );
};

export default Navbar;
