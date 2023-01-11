import "./styles.css";
import Navbar from "./components/Navbar";
import Launches from "./components/Launches";
import { useState } from "react";
/* eslint-disable */

export default function App() {
  const [displayLaunches, setDisplayLaunches] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Click to See Launches");

  const display = () => {
    setDisplayLaunches(!displayLaunches);
  };

  const changeButtonText = () => {
    buttonText === "Click to See Launches"
      ? setButtonText("Hide Launches")
      : setButtonText("Click to See Launches");
  };

  return (
    <div className="App">
      <Navbar />
      <button
        onClick={() => {
          display();
          changeButtonText();
        }}
      >
        {buttonText}
      </button>

      {displayLaunches ? <Launches /> : null}
    </div>
  );
}
