// src/pages/Animation.jsx
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Animation.css";

export default function Animation() {
  useEffect(() => {
    const field = document.getElementById("field");
    const ball = document.getElementById("bell");

    let fieldWidth = field.clientWidth;
    let fieldHeight = field.clientHeight;
    const ballSize = ball.clientWidth;

    // เริ่มตรงกลาง
    let x = (fieldWidth - ballSize) / 2;
    let y = (fieldHeight - ballSize) / 2;

    let vx = 5;
    let vy = 5;
    let goRight = true;
    let goDown = true;

    let intervalId = null;

    const process = () => {
      // การเคลื่อนที่แนวนอน
      if (goRight) {
        x += vx;
        if (x + ballSize >= fieldWidth) goRight = false;
      } else {
        x -= vx;
        if (x <= 0) goRight = true;
      }

      // การเคลื่อนที่แนวตั้ง
      if (goDown) {
        y += vy;
        if (y + ballSize >= fieldHeight) goDown = false;
      } else {
        y -= vy;
        if (y <= 0) goDown = true;
      }

      ball.style.left = x + "px";
      ball.style.top = y + "px";
    };

    const runBtn = document.querySelector("#control .btn-success");
    const basketballBtn = document.querySelector("#control button:nth-child(2)");
    const footballBtn = document.querySelector("#control button:nth-child(3)");
    const volleyballBtn = document.querySelector("#control button:nth-child(4)");
    const humanBtn = document.querySelector("#control button:nth-child(5)");
    const cartoonBtn = document.querySelector("#control button:nth-child(6)");
    const logoBtn = document.querySelector("#control button:nth-child(7)");

    // RUN / STOP
    runBtn.addEventListener("click", () => {
      if (!intervalId) {
        intervalId = setInterval(process, 25);
        runBtn.textContent = "STOP";
        runBtn.classList.remove("btn-success");
        runBtn.classList.add("btn-danger");
      } else {
        clearInterval(intervalId);
        intervalId = null;
        runBtn.textContent = "RUN";
        runBtn.classList.remove("btn-danger");
        runBtn.classList.add("btn-success");
      }
    });

    // เปลี่ยนลูกบอล
    basketballBtn.addEventListener("click", () => {
      ball.style.backgroundImage = 'url("src/assets/basketball.png")';
      ball.style.backgroundColor = "orange";
      ball.style.borderColor = "darkorange";
    });

    footballBtn.addEventListener("click", () => {
      ball.style.backgroundImage = 'url("src/assets/FB.png")';
      ball.style.backgroundColor = "white";
      ball.style.borderColor = "black";
    });

    volleyballBtn.addEventListener("click", () => {
      ball.style.backgroundImage = 'url("src/assets/volleyball.png")';
      ball.style.backgroundColor = "white";
      ball.style.borderColor = "blue";
    });

    humanBtn.addEventListener("click", () => {
      ball.style.backgroundImage = 'url("src/assets/boss.jfif")';
      ball.style.backgroundColor = "lightpink";
      ball.style.borderColor = "red";
    });

    cartoonBtn.addEventListener("click", () => {
      ball.style.backgroundImage = 'url("src/assets/miku2.png")';
      ball.style.backgroundColor = "yellow";
      ball.style.borderColor = "orange";
    });

    logoBtn.addEventListener("click", () => {
      ball.style.backgroundImage = 'url("src/assets/HAYABUSA.png")';
      ball.style.backgroundColor = "white";
      ball.style.borderColor = "black";
    });

    // Cleanup
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="container"
      className="flex flex-col items-center justify-center p-4 min-h-[70vh]"
    >
      {/* พื้นที่สนาม */}
      <div
        id="field"
        className="flex justify-center items-center border border-gray-400 bg-sky-200 relative"
        style={{ width: "600px", height: "400px" }}
      >
        <div id="bell"></div>
      </div>

      {/* ปุ่มควบคุม */}
      <div id="control" className="flex flex-wrap gap-2 mt-4 justify-center">
        <button className="btn btn-success">
          <i className="bi bi-skip-end"></i> RUN
        </button>
        <button className="btn btn-primary">
          <i className="bi bi-skip-end"></i> BASKETBALL
        </button>
        <button className="btn btn-primary">
          <i className="bi bi-skip-end"></i> Football
        </button>
        <button className="btn btn-primary">
          <i className="bi bi-skip-end"></i> Volleyball
        </button>
        <button className="btn btn-primary">
          <i className="bi bi-skip-end"></i> Human
        </button>
        <button className="btn btn-primary">
          <i className="bi bi-skip-end"></i> Cartoon
        </button>
        <button className="btn btn-primary">
          <i className="bi bi-skip-end"></i> Logo
        </button>
      </div>
    </div>
  );
}


