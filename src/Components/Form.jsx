import React, { useEffect, useState } from "react";

function Form({ inputValue, setInputValue, setBoolean }) {
  const [activeError, setActiveError] = useState(false);

  function valueOfTheInput(e) {
    setInputValue(e.target.value);
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function ActiveSucces() {
    if (!isValidEmail(inputValue)) {
      setBoolean(false);
      setActiveError(true);
    } else {
      setBoolean(true);
      setActiveError(false);
    }
  }

  return (
    <div className="form">
      <div className="sec1">
        <h1 className="form-title">Stay update!</h1>

        <p className="form-p">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <div className="form-list">
          <div className="l-item">
            <img src="../public/assets/images/icon-list.svg" />
            <p>Product discovery and building what matters</p>
          </div>
          <div className="l-item">
            <img src="../public/assets/images/icon-list.svg" />
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div className="l-item">
            <img src="../public/assets/images/icon-list.svg" />
            <p>And much more!</p>
          </div>
        </div>
      </div>

      <div className="form-container">
        <div className="label-container">
          <label htmlFor="email">Email address</label>
        </div>
        <div className="input-wrapper">
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            onChange={valueOfTheInput}
            className={activeError ? `error` : ""}
          />
          {activeError ? (
            <span>Valid email required</span>
          ) : (
            console.log("erroActivado")
          )}
        </div>
        <button onClick={ActiveSucces}>Subscribe to monthly newsletter</button>
      </div>
    </div>
  );
}

export default Form;
