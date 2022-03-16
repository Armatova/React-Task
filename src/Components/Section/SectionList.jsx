import React from "react";
import SectionCard from "./SectionCard";
import "./SectionList.css";

const SectionList = (props) => {
  let { clothes } = props;
  console.log(clothes);
  return (
    <div className="clothes-list">
      {clothes.map((item) => (
        <SectionCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default SectionList;
