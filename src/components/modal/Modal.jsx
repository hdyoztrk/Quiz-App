import React from "react";
import "./Modal.css";

function Modal({ score }) {
  return (
    <div className="modal">
      <div className="title">Score : {score}/100</div>
      <div
        onClick={() => {
          window.location = "/";
        }}
        className="btn"
      >
        {" "}
        Start again{" "}
      </div>
    </div>
  );
}

export default Modal;
