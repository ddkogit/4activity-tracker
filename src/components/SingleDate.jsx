import React, { useState } from "react";

function SingleDate({ item }) {
  const [color, setColor] = useState("");

  const toggleClass = (e) => {
    setColor(color === "" ? "blue" : "");
  };
  return (
    <div >
       
      <button className="single-date"
        onClick={toggleClass}
        style={{
          backgroundColor: color,
          cursor: "pointer",
        }}
      >
        {item}
      </button>
    </div>
  );
}

export default SingleDate;
