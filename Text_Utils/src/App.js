import React, { useState } from 'react'
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = (cls) => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0a254c"
      showAlert("Dark mode has been enabled", "success");
      document.title = "textUtils-dark mode"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("light mode has been enabled", "success");
      document.title = "textUtils-light mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar title="textUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About  mode={mode} showAlert={showAlert}/>} />
            <Route path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

