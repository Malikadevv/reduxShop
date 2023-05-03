import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import AddToBasket from "../../ui/AddToBasket";
import AddToFavoriteBtn from "../../ui/AddToFavoriteBtn";
import NavigateToCards from "../../ui/NavigateToCard";


const ProductCard = ({product}) => {
    const {basket} = useSelector(s => s)
    const foundProduct = basket.some(el => el.id === product.id)
    return (
        <div>
            <div
                className="max-w-sm  w-[60%]  mx-14 bg-white border border-gray-200 my-5  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={product.image} alt=""/>
                <div className="p-5 text-center">
                    <a href="#">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-[16px] text-gray-700 dark:text-gray-400">{product.description}</p>
                    <div>
                        <div className=" flex items-center justify-between">
                            <AddToFavoriteBtn product={product}/>
                            {
                                foundProduct ?
                                    <NavigateToCards/> :
                                    <AddToBasket product={product}/>
                            }

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;