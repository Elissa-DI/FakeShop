import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [
        {
            id: 1,
            title: "Tablet",
            category: "programmer",
        },
        {
            id: 2,
            title: "Tabletts",
            category: "programmerrs",
        }
    ]
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;     
        default:
            return state;
    }
}