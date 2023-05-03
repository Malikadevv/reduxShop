import {ADD_TO_BASKET, ADD_TO_FAVORITES, DECREASE_QUANTITY, DELETE_FROM_BASKET, GET_PRODUCT} from "../ActionTyps";


const initialState = {
    product: [],
    basket: [],
    favorites: [],
}


export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT : {
            return {
                ...state, product: action.payload
            }
        }
        case ADD_TO_BASKET: {
            const foundProduct = state.basket.find(el => el.id === action.payload.id)
            if (foundProduct) {
                return {
                    ...state,
                    basket: state.basket.map(el => el.id === foundProduct.id ? {...el, quantity: el.quantity + 1} : el)
                }
            } else {
                return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
            }
        }
        case DECREASE_QUANTITY : {
            return {
                ...state, basket: state.basket.map(el => {
                    if (el.id === action.payload) {
                        if (el.quantity > 1) {
                            return {...el, quantity: el.quantity - 1}
                        } else return el
                    } else return el
                })
            }
        }
        case DELETE_FROM_BASKET : {
            return {...state, basket: state.basket.filter((el) => el.id !== action.payload)}
        }


        case ADD_TO_FAVORITES: {
            const foundProduct = state.favorites.find(el => el.id === action.payload.id)
            if (foundProduct) {
                return {...state, favorites: state.favorites.filter(el => el.id !== action.payload.id)}
            } else {
                return {...state, favorites: [...state.favorites, {...action.payload, isLiked: true}]}
            }
        }

        default :
            return state
    }
}

