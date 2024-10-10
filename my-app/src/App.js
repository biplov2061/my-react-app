import "./App.css";
import Navbar from "./components/Navbar";
import About from "./About";
import Textform from "./Textform";
import { useState } from "react";
import Alert from "./Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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
    <Router>
    <Navbar
      title="Netflix"
    aboutText="Help?"
      main="Home"
      about="About"
        search="🔍"
         mode={mode}
         modeText={mode1}
         textColor={textColor}
        toggle={toggleMode}>
      </Navbar>

      <Alert alert="Success" mode={mode} />
 <div className="container my-3 ">
 
<Routes>
  <Route exact path="/about" element={<About />} />
  <Route exact path="/" element={<Textform heading="Enter the text to analyze" textColor={textColor}/>} />
</Routes>

  </div>
  </Router>
  </>
  );
}


export default App;
