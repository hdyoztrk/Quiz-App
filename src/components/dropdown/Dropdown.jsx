import React from "react";
import "./Dropdown.css";

function Dropdown({ data, setChange }) {
  return (
    <div onChange={(e) => setChange(e.target.value)} className="dropdown">
      <select name="" id="">
        {data.map((e, i) => (
          <option value={e}>{e}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
