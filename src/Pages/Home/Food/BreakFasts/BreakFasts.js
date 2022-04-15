import React from 'react';
import breakfast1 from '../../../../Images/breakfast/breakfast1.png'
import breakfast2 from '../../../../Images/breakfast/breakfast2.png'
import breakfast3 from '../../../../Images/breakfast/breakfast3.png'
import breakfast4 from '../../../../Images/breakfast/breakfast4.png'
import breakfast5 from '../../../../Images/breakfast/breakfast5.png'
import breakfast6 from '../../../../Images/breakfast/breakfast6.png'
import BreackFast from './BreakFast/BreakFast';

const BreakFasts = () => {
    const breakfast = [
        { name: "Healthy meal plan", id: "1", img: breakfast1, price: "46", description: "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion" },
        { name: "Fried chicken Bento", id: "2", img: breakfast2, price: "89", description: "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion" },
        { name: "Teragon-Rubbed-salmon", id: "3", img: breakfast3, price: "34", description: "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion" },
        { name: "Healthy meal plan", id: "4", img: breakfast4, price: "900", description: "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion" },
        { name: "Healthy meal plan", id: "5", img: breakfast5, price: "123", description: "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion" },
        { name: "Healthy meal plan", id: "6", img: breakfast6, price: "234", description: "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion" },
    ]
    return (
        <div className='container grid md:grid-cols-3 gap-10 mx-auto'>
            {
                breakfast.map(item => <BreackFast key={item.id} item={item}></BreackFast>)
            }
        </div>
    );
};

export default BreakFasts;