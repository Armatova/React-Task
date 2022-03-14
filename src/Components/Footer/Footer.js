import React from "react";

const Footer = ({ contacts }) => {
  console.log(contacts);
  return (
    <div>
      {contacts.map((item) => (
        <strong style={{ margin: "10px", cursor: "pointer" }} key={item.id}>
          {item.model}
        </strong>
      ))}
    </div>
  );
};

export default Footer;
