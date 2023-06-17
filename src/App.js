import React from "react";
import Main from "./components/main";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Service from "./components/services/service";
import About from "./components/about/about";
import Sectors from "./components/marketing/sectors";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/services/:name" element={<Service />} />
        <Route path="/sectors/:sector" element={<Sectors />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
