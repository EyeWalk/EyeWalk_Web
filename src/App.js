import * as React from 'react';
import './App.css';
import Home from "./screens/Home/Home"
import Shop from "./screens/Shop/Shop"

import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comprar" element={<Shop />} />
    </Routes>
  );
}

export default App;
