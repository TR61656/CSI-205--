 import React, { useState } from "react";

  function Add() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    return (
      <div style={boxStyle}>
        <h3 style={title}>ADD</h3>
        <p>A + B = {a + b}</p>

        <div style={twoCol}>
          <div>
            <p>A = {a}</p>
            <button style={btnRed} onClick={() => setA(a - 1)}>-</button>
            <button style={btnGreen} onClick={() => setA(a + 1)}>+</button>
          </div>
          <div>
            <p>B = {b}</p>
            <button style={btnRed} onClick={() => setB(b - 1)}>-</button>
            <button style={btnGreen} onClick={() => setB(b + 1)}>+</button>
          </div>
        </div>
      </div>
    );
  }

  const boxStyle = { border: "2px solid gray", padding: 20, borderRadius: 10, width: 300, margin: "20px auto" };
  const title = { color: "blue" };
  const twoCol = { display: "flex", justifyContent: "space-around" };
  const btnRed = { background: "#e74c3c", color: "white", border: "none", borderRadius: 5, padding: "5px 10px", margin: "2px" };
  const btnGreen = { background: "#27ae60", color: "white", border: "none", borderRadius: 5, padding: "5px 10px", margin: "2px" };

  export default Add;
