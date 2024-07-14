import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lnb from './component/lnb'
import About from './pages/about'
import Home from './pages/home'
import Rent from './pages/rent'
import ProductInfo from './pages/productInfo'
import Reference from './pages/reference'
import Footer from './component/footer'

const Router = () => {
  return (
    <BrowserRouter>
      <Lnb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Rent" element={<Rent />} />
        <Route path="/ProductInfo" element={<ProductInfo />} />
        <Route path="/Reference" element={<Reference />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
