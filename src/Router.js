import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Navigation';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import ProductList from './pages/DetailList/ProductList/ProductList';
import AllProducts from './pages/DetailList/AllProducts/AllProducts';
import DetailProducts from './pages/DetailProducts/DetailProducts';
import Main from './pages/Main/Main';
import Payment from './pages/Payment/Payment';
import SubCategoryMenu from './pages/DetailList/SubCategoryMenu/SubCategoryMenu';

function Router() {
    return (
        <BrowserRouter>
            <Banner />
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route
                    path="/products/sub_categories/:id"
                    element={<SubCategoryMenu />}
                />
                <Route
                    path="/products/main_categories/:id"
                    element={<AllProducts />}
                />
                <Route path="/product-list" element={<ProductList />} />
                <Route path="/detail-products" element={<DetailProducts />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;
