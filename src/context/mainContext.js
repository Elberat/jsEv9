import axios from 'axios';
import React, { createContext, useReducer } from 'react';

const API = 'http://localhost:8000/products';

export const MainContext = React.createContext();
const INIT_STATE = {
    products: [],
    pages: 0,
};
function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload.data,
                pages: Math.ceil(action.payload.headers['x-total-count'] / 1),
            };
        default:
            return state;
    }
}
const MainContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    async function createProduct(newProduct) {
        await axios.post(API, newProduct);
    }
    async function getProducts() {
        let res = await axios(API + window.location.search);
        console.log(res.headers['x-total-count']);
        dispatch({
            type: 'GET_PRODUCTS',
            payload: res,
        });
    }
    return (
        <MainContext.Provider
            value={{
                products: state.products,
                pages: state.pages,
                createProduct,
                getProducts,
            }}
        >
            {children}
        </MainContext.Provider>
    );
};

export default MainContextProvider;
