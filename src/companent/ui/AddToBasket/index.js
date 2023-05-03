import React from 'react';
import {SlBasketLoaded} from "react-icons/sl";
import {useDispatch} from "react-redux";
import {ADD_TO_BASKET} from "../../../Redux/ActionTyps";

const AddToBtn = ({product}) => {
    const dispatch = useDispatch()
    const addToBasket = (product) => {
        dispatch({type: ADD_TO_BASKET, payload: product})
    }
    return (

            <button onClick={() => addToBasket(product)}
                    className="text-white   flex items-center   bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm
                               px-5 py-2.5 text-center mr-2 mb-2">Добавить в &nbsp; <SlBasketLoaded/>
            </button>

    );
};

export default AddToBtn;