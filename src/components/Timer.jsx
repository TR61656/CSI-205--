import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}m ${s.toString().padStart(2, "0")}s`;
  };

  return (
    <div style={boxStyle}>
      <h3 style={title}>TIMER</h3>
      <div style={value}>{formatTime(seconds)}</div>
      <div style={row}>
        <button style={btnRed} onClick={() => { setSeconds(0); setRunning(false); }}>Reset</button>
        <button style={btnGreen} onClick={() => setRunning(!running)}>
          {running ? "Pause" : "Run"}
        </button>
      </div>
    </div>
  );
}

const boxStyle = { border: "2px solid gray", padding: 20, borderRadius: 10, width: 250, margin: "20px auto" };
const title = { color: "blue" };
const row = { display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" };
const btnRed = { background: "#e74c3c", color: "white", border: "none", borderRadius: 5, padding: "5px 10px" };
const btnGreen = { background: "#27ae60", color: "white", border: "none", borderRadius: 5, padding: "5px 10px" };
const value = { fontSize: "1.5rem", margin: "10px 0" };

export default Timer;
