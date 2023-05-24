import * as React from 'react';
import Main from "./screens/Main/Main"
import Shop from "./screens/Shop/Shop"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/comprar" element={<Shop />} />
    </Routes>
  );
}

export default App;
