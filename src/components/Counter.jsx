import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={boxStyle}>
      <h3 style={title}>COUNTER</h3>
      <div style={row}>
        <button style={btnRed} onClick={() => setCount(count - 1)}>-</button>
        <span style={value}>{count}</span>
        <button style={btnGreen} onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

// inline styles
const boxStyle = { border: "2px solid gray", padding: 20, borderRadius: 10, width: 200, margin: "20px auto" };
const title = { color: "blue" };
const row = { display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" };
const btnRed = { background: "#e74c3c", color: "white", border: "none", borderRadius: 5, padding: "5px 10px" };
const btnGreen = { background: "#27ae60", color: "white", border: "none", borderRadius: 5, padding: "5px 10px" };
const value = { fontSize: "1.5rem", width: "40px" };

export default Counter;