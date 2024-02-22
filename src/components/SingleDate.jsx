import React, { useState } from "react";

function SingleDate({ item }) {
  const [color, setColor] = useState("");

  const toggleClass = (e) => {
    setColor(color === "" ? "rgb(76, 198, 219)" : "");
  };
  return (
    <div >
       
      <button className="single-date"
        onClick={toggleClass}
        style={{
          backgroundColor: color,
         
        }}
      >
        {item}
      </button>
    </div>
  );
}

export default SingleDate;
