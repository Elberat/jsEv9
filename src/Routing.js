import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddNewProduct from './components/AddNewProduct/AddNewProduct';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ProductsList from './components/ProductsList/ProductsList';
import MainContextProvider from './context/mainContext';
import MainContext from './context/mainContext';

const Routing = () => {
    return (
        <MainContextProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/add' element={<AddNewProduct />} />
                    <Route path='/list' element={<ProductsList />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </MainContextProvider>
    );
};

export default Routing;
