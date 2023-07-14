
// Define your initial state
const initialState = {
    products: [],
    isLoading: false,
    error: null,
};

// Define your actions
const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// Define your action creators
const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST,
});

const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
});

// Define your async action
export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchProductsRequest());

        try {
            // Simulate an API call to fetch products
            const response = await fetch('/api/products');
            const data = await response.json();

            dispatch(fetchProductsSuccess(data));
        } catch (error) {
            dispatch(fetchProductsFailure(error.message));
        }
    };
};

// Define your reducer function
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.payload,
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};


export default productReducer;
