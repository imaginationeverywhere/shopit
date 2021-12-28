import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {
    CREATE_DRAFT_ORDER_REQUEST,
    CREATE_DRAFT_ORDER_SUCCESS,
    CREATE_DRAFT_ORDER_FAIL,
} from "../constants/orderConstants";

const initialState = {
    loading: false,
    order: {},
    error: ""
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_DRAFT_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            };
        case CREATE_DRAFT_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.order,
                error: ""
            };
        case CREATE_DRAFT_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: "An error occurred. Please contact support"
            };

        default:
            return state;
    }
}

const persistConfig = {
    keyPrefix: "molla-",
    key: "order",
    storage
}

export default persistReducer(persistConfig, orderReducer);