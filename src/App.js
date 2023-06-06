import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Business from "./Components/Business";
import Science from "./Components/Science";
import Entertainment from "./Components/Entertainment";
import General from "./Components/general";
import Health from "./Components/Health";
import Sports from "./Components/Sports";
import Technology from "./Components/Technology";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  return (
    <>
      
        <Navbar mode={mode} setMode={setMode} />
        <div className="adarsh">
          {/* <Home mode={mode} /> */}
          <Routes>
            <Route path="/" element={<Home mode={mode} />} />
            <Route path="/business" element={<Business mode={mode} />} />
            <Route path="/science" element={<Science mode={mode} />} />
            <Route path="/entertainment" element={<Entertainment mode={mode} />}/>
            <Route path="/general" element={<General mode={mode} />} />
            <Route path="/health" element={<Health mode={mode} />} />
            <Route path="/sports" element={<Sports mode={mode} />} />
            <Route path="/technology" element={<Technology mode={mode} />} />
          </Routes>
        </div>
      
    </>
  );
}

export default App;
