import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Navigation';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Cart from './pages/Cart/Cart';
import DetailList from './pages/DetailList/DetailList';
import DetailProducts from './pages/DetailProducts/DetailProducts';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Payment from './pages/Payment/Payment';
import SignUp from './pages/SignUp/SignUp';

function Router() {
    return (
        <BrowserRouter>
            <Banner />
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/detail-list" element={<DetailList />} />
                <Route path="/detail-products" element={<DetailProducts />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;
