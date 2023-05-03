import React from 'react';
import {useState} from "react";
import {IoIosArrowDown} from "react-icons/io";
import "./new.css"
import {FaCcVisa} from "react-icons/fa";
const newLine = () => {
    return (
        <div>
            <h1>Оплата</h1>
            <p>Здесь вы можете добавить или изменить реквизиты для оплаты уровня участия.</p>
            <div>
                <div>
                    <h1>Ваши способы оплаты</h1>
                    <p>Выберите способ оплаты или измените его</p>
                </div>
                <div>

                            <div>
                                <div>
                                    <div>
                                        <input type="checkbox"/>
                                    </div>
                                    <div>
                                        <FaCcVisa/>
                                    </div>
                                    <div>
                                        <p>Visa</p>
                                    </div>
                                </div>
                            </div>

                </div>
                <div></div>
            </div>
        </div>
    );
};

export default newLine;