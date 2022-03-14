import React from "react";

const SectionList = (props) => {
  let { clothes } = props;
  console.log(clothes);
  return (
    <div className="clothes-list">
      {clothes.map((item) => (
        <SectionList clothes={item} key={item.id} />
      ))}
    </div>
  );
};

export default SectionList;
