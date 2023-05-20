
import Mockman from "mockman-js"
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Routes>
        <Route path="/" element={<h1 style={{height:"2000px", border: "2px solid "}}>Hey! </h1>}/>
        <Route path="/mockman" element={<Mockman/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
