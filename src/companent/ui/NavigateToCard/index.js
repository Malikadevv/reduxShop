import React from 'react';
import {SlBasketLoaded} from "react-icons/sl";
import {useNavigate} from "react-router-dom";

const NavigateToCard = () => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate('/basket')}
                className="text-gray-900  flex items-center   bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200
                                             hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200
                                             dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Перейти в &nbsp; <SlBasketLoaded/>
        </button>
    );
};

export default NavigateToCard;