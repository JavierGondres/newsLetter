import React from "react";

function Succes({ email }) {
  return (
    <div className="succes">
      <div className="title-sec">
        <img src="../public/assets/images/icon-list.svg" className="check" />
        <h1 className="succes-t">
          Thanks for <br /> subscribing!
        </h1>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please open it and
          click the button inside to confirm your subscription
        </p>
      </div>

      <button className="sb">Dismiss message</button>
    </div>
  );
}

export default Succes;
