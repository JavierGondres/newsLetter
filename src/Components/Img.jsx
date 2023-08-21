import { React, useEffect, useState } from "react";

function Img() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <div className="img-wrapper">
      <div className="img-container">
        <img
          className="img"
          src={
            screenSize.width < 900
              ? "assets/images/illustration-sign-up-mobile.svg"
              : "assets/images/illustration-sign-up-desktop.svg"
          }
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Img;
