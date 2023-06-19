import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Service from "./components/services/service";
import About from "./components/about/about";
import Sectors from "./components/marketing/sectors";
import Main from "./components/home/main";
import Product from "./components/products/product";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/secon_website" exact element={<Main/>} />
        <Route path="/about" exact element={<About />} />
        <Route path="/services/:name" element={<Service />} />
        <Route path="/sectors/:sector" element={<Sectors />} />
        <Route path="/products/:product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
