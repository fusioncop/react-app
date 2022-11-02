import React, { useState } from "react";
import "./style.css";

function TimeCal() {
  const [Time, setTime] = useState({
    Shour: 0,
    Smin: 0,
    Ehour: 0,
    Emin: 0,
  });
  const { Shour, Smin, Ehour, Emin } = Time;
  const [Result, setResult] = useState(0);

  const getResult = () => {
    const res =
      60 -
      parseInt(Smin) +
      parseInt(Emin) +
      (parseInt(Ehour) - parseInt(Shour) - 1) * 60;
    setResult(res);
  };

  const onChange = (e) => {
    let { value, name } = e.target;

    if (!isNaN(value)) {
      setTime({
        ...Time,
        [name]: value,
      });
    }
  };

  return (
    <div>
      <h1>Time calculator</h1>
      <div className="layout">
        <div className="start time">
          start time :
          <input value={Shour} name="Shour" onChange={onChange}></input>hour
          <input name="Smin" value={Smin} onChange={onChange}></input>minute
        </div>
        <div className="end time">
          end time :<input value={Ehour} name="Ehour" onChange={onChange}></input>
          hour<input name="Emin" value={Emin} onChange={onChange}></input>minute
        </div>
        <button onClick={getResult}>Calculate</button>
        <span className="result" style={{ color: "red" }}>
          {Result}minute
        </span>
        <span className="result" style={{ color: "red" }}>
          {parseInt(Result / 60)}hour {Result % 60}minute
        </span>
      </div>
    </div>
  );
}

export default TimeCal;
