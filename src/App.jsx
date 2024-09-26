import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';

import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Transfer from "./pages/Transfer/Transfer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App