import React from "react";
import "./styles/button.css";

export default function Button({ imp, text, link }) {
  return (
    <div className={`button ${imp === "secondary" ? "button_white" : ""}`}>
      <a href={link}>{text}</a>
    </div>
  );
}
