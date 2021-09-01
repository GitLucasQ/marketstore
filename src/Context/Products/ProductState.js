import React, { useReducer } from 'react'
import axios from 'axios'

import {
    GET_CATEGORIES_PRODUCTS, GET_SELECTED_CATEGORY, GET_PROUDCTS_BY_CATEGORIES,
    GET_ALL_PRODUCTS, ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY
} from '../Types'
import ProductReducer from './ProductReducer'
import ProductContext from './ProductContext'


const ProductState = (props) => {

    const initialState = {
        categories: [],
        selectedCategory: null,
        products: [],
        shopCart: []
    }

    const [state, dispatch] = useReducer(ProductReducer, initialState)

    const getCategoriesProducts = async () => {
        try {
            const resp = await axios.get('http://localhost:7000/products/getCategories')
            dispatch({ type: GET_CATEGORIES_PRODUCTS, payload: resp.data })
        } catch (error) {
            console.log(error)
        }
    }

    const getSelectedCategory = (category) => {
        dispatch({ type: GET_SELECTED_CATEGORY, payload: category })
    }

    const getProductsByCategories = async (category) => {
        try {
            const resp = await axios.get('http://localhost:7000/products/findProductsByCategory/' + category)
            dispatch({ type: GET_PROUDCTS_BY_CATEGORIES, payload: resp.data })
        } catch (error) {
            console.log(error)
        }
    }

    const getAllProducts = async () => {
        try {
            const resp = await axios.get('http://localhost:7000/products/allProducts')
            dispatch({ type: GET_ALL_PRODUCTS, payload: resp.data })
        } catch (error) {
            console.log(error)
        }
    }

    const addProductToCart = (selectedProduct) => {
        dispatch({ type: ADD_TO_CART, payload: selectedProduct })
    }

    return (
        <ProductContext.Provider
            value={{
                categories: state.categories,
                selectedCategory: state.selectedCategory,
                products: state.products,
                shopCart: state.shopCart,
                getCategoriesProducts,
                getSelectedCategory,
                getProductsByCategories,
                getAllProducts,
                addProductToCart,
                ...state
            }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;