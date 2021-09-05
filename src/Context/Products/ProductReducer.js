import {
    GET_CATEGORIES_PRODUCTS, GET_SELECTED_CATEGORY, GET_PROUDCTS_BY_CATEGORIES,
    GET_ALL_PRODUCTS, ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY
} from '../Types'

const ProductReducer = (state, action) => {
    const { payload, type } = action

    switch (type) {

        case GET_CATEGORIES_PRODUCTS:
            return {
                ...state,
                categories: payload,
            };

        case GET_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: payload,
            };

        case GET_PROUDCTS_BY_CATEGORIES:
            return {
                ...state,
                products: payload
            };

        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload
            };

        case ADD_TO_CART:
            if (!state.shopCart.find(item => item._id === payload._id)) {
                state.shopCart.push({ ...payload, quantity: 1 })
                state.sumTotal = state.sumTotal + payload.price
            }

            return {
                ...state,
                shopCart: [...state.shopCart],
                sumTotal: state.sumTotal
            };

        case INCREASE_QUANTITY:
            state.shopCart[state.shopCart.findIndex(item => item._id === payload._id)].quantity++
            return {
                ...state,
                shopCart: [...state.shopCart]
            };

        case DECREASE_QUANTITY:
            state.shopCart[state.shopCart.findIndex(item => item._id === payload._id)].quantity--
            return {
                ...state,
                shopCart: [...state.shopCart]
            };

        default:
            return state
    }
}

export default ProductReducer;