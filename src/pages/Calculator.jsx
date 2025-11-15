import { useEffect, useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [screen, setScreen] = useState("0");
  const [lastValue, setLastValue] = useState(null);
  const [lastOperator, setLastOperator] = useState(null);
  const [state, setState] = useState("S0"); // S0: เริ่มต้น, S1: กำลังพิมพ์เลข, S2: หลังเลือก operator

  const updateScreen = (newScreen = screen, newOperator = lastOperator) => {
    setScreen(newScreen);
    setLastOperator(newOperator);
  };

  const operatorClicked = (operator) => {
    if (state === "S1") {
      if (lastValue === null) {
        setLastValue(Number(screen));
      } else if (lastOperator) {
        let result = lastValue;
        if (lastOperator === "+") result += Number(screen);
        else if (lastOperator === "-") result -= Number(screen);
        else if (lastOperator === "*") result *= Number(screen);
        else if (lastOperator === "/") result /= Number(screen);
        setLastValue(result);
        setScreen(String(result));
      }
      setLastOperator(operator);
      setState("S2");
    } else if (state === "S2") {
      setLastOperator(operator);
    }
  };

  const equalClicked = () => {
    if (lastOperator && lastValue !== null) {
      let currentValue = Number(screen);
      let result = lastValue;
      if (lastOperator === "+") result += currentValue;
      else if (lastOperator === "-") result -= currentValue;
      else if (lastOperator === "*") result *= currentValue;
      else if (lastOperator === "/") result /= currentValue;

      setScreen(String(result));
      setLastValue(null);
      setLastOperator(null);
      setState("S1");
    }
  };

  const numberClicked = (number) => {
    if (state === "S0") {
      setScreen(String(number));
      setState("S1");
    } else if (state === "S1") {
      setScreen((prev) => (prev === "0" ? String(number) : prev + number));
    } else if (state === "S2") {
      setScreen(String(number));
      setState("S1");
    }
  };

  const ceClicked = () => {
    setScreen("0");
    setLastValue(null);
    setLastOperator(null);
    setState("S0");
  };

  // 🎹 รองรับคีย์บอร์ด
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key >= "0" && event.key <= "9") {
        numberClicked(Number(event.key));
      } else if (event.key === "+") {
        operatorClicked("+");
      } else if (event.key === "-") {
        operatorClicked("-");
      } else if (event.key === "*" || event.key === "x") {
        operatorClicked("*");
      } else if (event.key === "/") {
        operatorClicked("/");
      } else if (event.key === "=" || event.key === "Enter") {
        equalClicked();
      } else if (event.key === "Escape") {
        ceClicked();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [screen, lastOperator, lastValue, state]);

  return (
    <div>
      <div className="cal-container">
        <div id="screen" className="cal-screen">
          {screen}
        </div>

        <div>
          <button className="cal-btn cal-btn-green" disabled>MC</button>
          <button className="cal-btn cal-btn-green" disabled>MR</button>
          <button className="cal-btn cal-btn-green" disabled>M+</button>
          <button className="cal-btn cal-btn-green" disabled>M−</button>
          <button className="cal-btn cal-btn-red" onClick={ceClicked}>CE</button>
        </div>

        <div>
          {[7, 8, 9].map((n) => (
            <button key={n} className="cal-btn cal-btn-blue" onClick={() => numberClicked(n)}>{n}</button>
          ))}
          <button
            className={`cal-btn ${lastOperator === "/" ? "cal-btn-orange" : "cal-btn-green"}`}
            onClick={() => operatorClicked("/")}
          >
            ÷
          </button>
          <button className="cal-btn cal-btn-green" disabled>√</button>
        </div>

        <div>
          {[4, 5, 6].map((n) => (
            <button key={n} className="cal-btn cal-btn-blue" onClick={() => numberClicked(n)}>{n}</button>
          ))}
          <button
            className={`cal-btn ${lastOperator === "*" ? "cal-btn-orange" : "cal-btn-green"}`}
            onClick={() => operatorClicked("*")}
          >
            ×
          </button>
          <button className="cal-btn cal-btn-green" disabled>%</button>
        </div>

        <div>
          {[1, 2, 3].map((n) => (
            <button key={n} className="cal-btn cal-btn-blue" onClick={() => numberClicked(n)}>{n}</button>
          ))}
          <button
            id="minus"
            className={`cal-btn ${lastOperator === "-" ? "cal-btn-orange" : "cal-btn-green"}`}
            onClick={() => operatorClicked("-")}
          >
            −
          </button>
          <button className="cal-btn cal-btn-green" disabled>1/x</button>
        </div>

        <div>
          <button className="cal-btn cal-btn-blue" onClick={() => numberClicked(0)}>0</button>
          <button className="cal-btn cal-btn-blue" disabled>.</button>
          <button className="cal-btn cal-btn-blue" disabled>+/−</button>
          <button
            id="plus"
            className={`cal-btn ${lastOperator === "+" ? "cal-btn-orange" : "cal-btn-green"}`}
            onClick={() => operatorClicked("+")}
          >
            +
          </button>
          <button className="cal-btn cal-btn-green" onClick={equalClicked}>=</button>
        </div>
      </div>

      <div className="student">67177633 ธีรภพ ยอยบุบผา</div>
    </div>
  );
}
