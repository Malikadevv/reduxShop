import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import {BiMinus} from 'react-icons/bi'
import {FaTrashAlt} from 'react-icons/fa'
import {useDispatch} from "react-redux";
import {ADD_TO_BASKET, DECREASE_QUANTITY, DELETE_FROM_BASKET} from "../../../Redux/ActionTyps";

const BasketRow = ({el}) => {
    const dispatch = useDispatch()
    const increaseQuantity = (product) =>{
        dispatch({type: ADD_TO_BASKET,payload:product})
    }
    return (
        <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {el.title}
            </th>
            <td className="px-6 py-4">
                <img src={el.image} width={50} alt=""/>
            </td>
            <td className="px-6  mt-4  flex items-center  text-[20px] py-4">
                <span   onClick={ () => dispatch({type:DECREASE_QUANTITY, payload:el.id})} className='mx-2 cursor-pointer'><BiMinus/></span>
                {el.quantity}

                <span      onClick={ () => increaseQuantity(el)}  className='mx-2 cursor-pointer'><AiOutlinePlus/></span>
            </td>
            <td className="px-6 text-[20px] py-4">
                ${el.price * el.quantity}
            </td>
            <td className="px-6  pl-2 cursor-pointer text-2xl ">
                <span> <FaTrashAlt  onClick={() => dispatch({type:DELETE_FROM_BASKET, payload: el.id}) }/></span>
            </td>
        </tr>

    );
};

export default BasketRow;