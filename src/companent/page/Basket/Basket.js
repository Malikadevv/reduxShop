import React from 'react';
import {useSelector} from "react-redux";
import BasketTable from "./BasketTable";
import {Link} from "react-router-dom";

const Basket = () => {
    const {basket} = useSelector(s => s)
    return (
        <div>
            <div className="container">
                <div className="relative overflow-x-auto  my-14  shadow-md sm:rounded-lg">
                    {
                        basket.length ? <BasketTable/> :
                            <Link to={'/'}>
                                <div
                                    className='flex justify-center items-center w-[30%] h-16 mx-auto  my-20  bg-blue-700'>ADD
                                    PRODUCTS +
                                </div>
                            </Link>
                    }
                </div>
            </div>

        </div>
    );
};

export default Basket;