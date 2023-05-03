import React from 'react';
import {BsFillHeartFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_FAVORITES} from "../../../Redux/ActionTyps";

const AddToFavoriteBtn = ({product}) => {
    const dispatch = useDispatch()
    const {favorites} = useSelector(s => s)
    const addToFavorite = (item) => {
        dispatch({type: ADD_TO_FAVORITES, payload: item})
    }

    const  found = favorites.some(el => el.id === product.id)

    return (
        <button onClick={() => addToFavorite({product})}
            className={`text-white ${found ? 'text-red-500' : ""} bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg  text-sm px-5 py-2.5 text-center mr-2 mb-2`}>
            <BsFillHeartFill/>
        </button>
    );
};

export default AddToFavoriteBtn;