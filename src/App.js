
import './index.css';

import HeroBanner from "./Components/HeroBanner"
import FooterBanner from "./Components/FooterBanner"
import Product from './Components/Product';
import Layout from './Components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './pages/product/slug'
import None from './pages/none'
import { StateContext } from './context/StateContext';
import { Toaster } from 'react-hot-toast';
import ProductCategories from './Components/ProductCategories';

function  App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <StateContext>
        <Layout>
        <Toaster />
        <HeroBanner />
        <div className='products-heading'>
          <h2>Best Selling Products</h2>
          <p>Speakers of many variations</p>
        </div>
  
        <div className='products-container'>
          <Product />
        </div>
          <h2 className='products-heading'>All Categories</h2>
          <ProductCategories />
        <FooterBanner />
        </Layout>
        </StateContext>}>
      
        </Route>
        <Route path="/product/:slug" element={
        <StateContext>
        <Layout>
        <Toaster />
        <ProductDetails/>
        </Layout>
        </StateContext>}>
        </Route>
        <Route path="*" element={<None />}>
        </Route>
      </Routes>
    </BrowserRouter>
      
      
    )
  }


export default App;
