import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Navigation';
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
import SubCategoryMenu from './pages/DetailList/SubCategoryMenu/SubCategoryMenu';

function Router() {
    return (
        <BrowserRouter>
            <Banner />
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route
                    path="/products/main_categories/:id"
                    element={<AllProducts />}
                />
                <Route
                    path="/products/sub_categories/:id"
                    element={<ProductList />}
                />
                <Route
                    path="/products/:id/:id/:id"
                    element={<DetailProducts />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;
