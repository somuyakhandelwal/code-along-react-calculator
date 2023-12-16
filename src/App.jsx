import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [operation, setOperation] = useState("");

  const handleOperation = (e) => {
    const value = e.target.innerText;
    if (["+", "-", "*", "/"].includes(operation.slice(-1)) && ["+", "-", "*", "/"].includes(value)) {
      setOperation(operation.slice(0, -1) + value);
    } else {
      setOperation(operation + value);
    }
  };

  const handleEqualTo = () => {
    if (operation === "" || ["+", "-", "*", "/"].includes(operation.slice(-1))) {
      setOperation("");
      return;
    }
    try {
      const value = eval(operation);
      setOperation(value.toString());
    } catch (error) {
      setOperation("Error");
    }
  };

  const ACbutton = () => {
    setOperation("");
  };

  const DelButton = () => {
    setOperation(operation.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div id="screen" className="calc-screen">
        {operation === "" ? 0 : operation}
      </div>
      <div className="calculator-body calc-body">
        <div className="row calc-button-row">
          <button onClick={ACbutton} className="ac">
            AC
          </button>
          <button onClick={DelButton} className="del">
            DEL
          </button>
          <button onClick={handleOperation} className="opt">
            /
          </button>
        </div>
        <div className="row calc-button-row">
          <button onClick={handleOperation}>1</button>
          <button onClick={handleOperation}>2</button>
          <button onClick={handleOperation}>3</button>
          <button onClick={handleOperation} className="opt">
            *
          </button>
        </div>
        <div className="row calc-button-row">
          <button onClick={handleOperation}>4</button>
          <button onClick={handleOperation}>5</button>
          <button onClick={handleOperation}>6</button>
          <button onClick={handleOperation} className="opt">
            -
          </button>
        </div>
        <div className="row calc-button-row">
          <button onClick={handleOperation}>7</button>
          <button onClick={handleOperation}>8</button>
          <button onClick={handleOperation}>9</button>
          <button onClick={handleOperation} className="opt">
            +
          </button>
        </div>
        <div className="row calc-button-row">
          <button onClick={handleOperation}>.</button>
          <button onClick={handleOperation}>0</button>
          <button onClick={handleEqualTo} className="opt">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
