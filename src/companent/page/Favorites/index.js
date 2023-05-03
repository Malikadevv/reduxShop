import React from 'react';
import ProductCard from "../productCard/Card";
import {useSelector} from "react-redux";

const Favorites = () => {
    const {favorites} = useSelector(state => state)
    return (

        <div className="container">
            <div className="flex  flex-wrap px-2 py-10">
                {
                    favorites.map(el => <ProductCard product={el}/>)
                }
            </div>
            </div>

    );
};

export default Favorites;