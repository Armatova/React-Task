import React from "react";
import "./Footer.css";

const Footer = ({ contacts }) => {
  console.log(contacts);
  return (
    <div>
      {contacts.map((item) => (
        <div className="container">
          <strong
            style={{ margin: "30px", color: "blue", fontSize: "medium" }}
            key={item.id}
          >
            {item.phoneNumber}
          </strong>
          <strong
            style={{ margin: "30px", color: "blue", fontSize: "medium" }}
            key={item.id}
          >
            {item.email}
          </strong>
          <strong
            style={{ margin: "30px", color: "blue", fontSize: "medium" }}
            key={item.id}
          >
            {item.socialMedia}
          </strong>
        </div>
      ))}
    </div>
  );
};

export default Footer;
