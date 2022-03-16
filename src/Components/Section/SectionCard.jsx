import React from "react";
import "./SectionCard.css";

const SectionCard = ({ item }) => {
  console.log(item);
  return (
    <div>
      <h2 style={{ color: "blue" }}>{item.model}</h2>
      <img src={item.image} alt="clothes" className="clothes-img" />
    </div>
  );
};

export default SectionCard;
