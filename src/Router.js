import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Cart from './pages/Cart/Cart';
import ProductList from './pages/DetailList/ProductList/ProductList';
import AllProducts from './pages/DetailList/AllProducts/AllProducts';
import DetailProducts from './pages/DetailProducts/DetailProducts';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Payment from './pages/Payment/Payment';
import SignUp from './pages/SignUp/SignUp';
import SubCategoryMenu from './pages/DetailList/SubCategoryMenu.js/SubCategoryMenu';

function Router() {
    return (
        <BrowserRouter>
            <Banner />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/sub" element={<SubCategoryMenu />} />
                <Route path="/detail-products" element={<DetailProducts />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;
