import React from 'react';
import BasketRow from "./BasketRow";
import {useSelector} from "react-redux";

const BasketTable = () => {
    const {basket} = useSelector(s => s)
    const totalPrice = basket.reduce((acc,el) =>{
      return acc + el.price * el.quantity
    },0)



    return (
        <>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">


                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    basket.map(el => <BasketRow el={el}/>)
                }
                </tbody>
                <div className="text-xl my-4 border-0 font-mono mx-4 ">Total:{totalPrice} SOM</div>


            </table>
        </>
    );
};

export default BasketTable;