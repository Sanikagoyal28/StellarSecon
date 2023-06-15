import React from "react";
import Main from "./components/main";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Service from "./components/services/service";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/services/:name" element={<Service />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
