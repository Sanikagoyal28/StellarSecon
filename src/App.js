import React from "react";
import Main from "./components/main";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Service from "./components/services/service";
import About from "./components/about/about";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/services/:name" element={<Service />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
