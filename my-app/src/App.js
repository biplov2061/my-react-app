import "./App.css";
import Navbar from "./components/Navbar";
import About from "./About";
import Textform from "./Textform";
import { useState } from "react";
import Alert from "./Alert";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, changeMode] = useState("dark");
  const [mode1, change] = useState("mode");
  const [textColor, changeColor] = useState("black");

  // for dark and light color toggle
  const toggleMode = () => {
    if (mode === "dark") {
      changeColor("white");
      change("dark");
      changeMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Textutils - Light Mode";
    } else {
      changeColor("black");
      change("light");
      changeMode("dark");
      document.body.style.backgroundColor = "black";
      document.title = "Textutils - Dark Mode";
      document.title = "Textutils - 16 unreaded messages !";
    }
  };

  return (
    <>
      <Navbar
      title="Netflix"
    aboutText="Help?"
      main="Home"
        search="🔍"
         mode={mode}
         modeText={mode1}
        toggle={toggleMode}>
      </Navbar>

      <Alert alert="Success" mode={mode} />
<div className="container my-3 ">
  
     <Textform textcolor={textColor}></Textform> 
  
</div>

    // {/* </Router> */}
    </>
  );
}


export default App;
