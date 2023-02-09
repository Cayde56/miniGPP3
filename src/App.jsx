import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Traductor } from "./components/Traductor";
import { ImageVariatiorForm } from "./components/ImageVariatorForm";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <ImageVariatiorForm />
      {/* <Traductor /> */}
    </div>
  );
}

export default App;
