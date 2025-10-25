import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './landingPage/Navbar';
import HomePage from './landingPage/home/HomePage';
import Signup from './landingPage/signup/Signup';
import About from './landingPage/about/AboutPage';
import Products from './landingPage/products/ProductPage';
import Pricing from './landingPage/pricing/PricingPage';
import Support from './landingPage/support/SupportPage';
import Footer from './landingPage/Footer';
import NotFound from './landingPage/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/support' element={<Support />} />
        {/* If any router are not match */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();