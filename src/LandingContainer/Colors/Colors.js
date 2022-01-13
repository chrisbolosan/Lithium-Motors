import React from "react";
import "./Colors.css";
function Colors() {
  return (
    <div className="colors">
      <input type="checkbox" className="blue" name="blue" value="#143061" />
      <input type="checkbox" className="purple" name="purple" value="#81396F" />
      <input type="checkbox" className="pink" name="purple" value="#81396F" />
    </div>
  );
}

export default Colors;
