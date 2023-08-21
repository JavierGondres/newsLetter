import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Img from "./Components/Img";
import Succes from "./Components/Succes";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [boolean, setBoolean] = useState(false);

  return (
    <div className="">
      {!boolean ? (
        <div className="wrapper">
          <Form
            inputValue={inputValue}
            setInputValue={setInputValue}
            setBoolean={setBoolean}
          ></Form>
          <Img></Img>
        </div>
      ) : (
        <div className="succes-wrapper">
          <Succes email={inputValue}></Succes>
        </div>
      )}
    </div>
  );
}

export default App;
