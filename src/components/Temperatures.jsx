import React, { useState, useEffect } from "react";

function Temperatures() {
  const [celsius, setCelsius] = useState(25);

  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  return (
    <div style={boxStyle}>
      <h3 style={title}>TEMPERATURES</h3>
      <div style={threeCol}>
        <TempBox label="CELSIUS" value={celsius} onChange={setCelsius} />
        <TempDisplay label="FAHRENHEIT" value={fahrenheit.toFixed(2)} />
        <TempDisplay label="KELVIN" value={kelvin.toFixed(2)} />
      </div>
    </div>
  );
}

function TempBox({ label, value, onChange }) {
  return (
    <div style={tempBox}>
      <p style={{ color: "blue" }}>{label}</p>
      <h4>{value.toFixed(2)}°</h4>
      <button style={btnRed} onClick={() => onChange(value - 1)}>-</button>
      <button style={btnGreen} onClick={() => onChange(value + 1)}>+</button>
    </div>
  );
}

function TempDisplay({ label, value }) {
  return (
    <div style={tempBox}>
      <p style={{ color: "blue" }}>{label}</p>
      <h4>{value}°</h4>
    </div>
  );
}

const boxStyle = { border: "2px solid gray", padding: 20, borderRadius: 10, width: 450, margin: "20px auto" };
const title = { color: "blue" };
const threeCol = { display: "flex", justifyContent: "space-around" };
const tempBox = { border: "1px solid lightgray", padding: 10, borderRadius: 10, width: 120 };
const btnRed = { background: "#e74c3c", color: "white", border: "none", borderRadius: 5, padding: "5px 10px", margin: "2px" };
const btnGreen = { background: "#27ae60", color: "white", border: "none", borderRadius: 5, padding: "5px 10px", margin: "2px" };

export default Temperatures;