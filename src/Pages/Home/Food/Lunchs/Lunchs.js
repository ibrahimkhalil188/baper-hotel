import React from 'react';
import lunch1 from "../../../../Images/lunch/lunch1.png"
import lunch2 from "../../../../Images/lunch/lunch2.png"
import lunch3 from "../../../../Images/lunch/lunch3.png"
import lunch4 from "../../../../Images/lunch/lunch4.png"
import lunch5 from "../../../../Images/lunch/lunch5.png"
import lunch6 from "../../../../Images/lunch/lunch6.png"
import Lunch from './Lunch/Lunch';

const Lunchs = () => {
    const lunchItem = [
        { name: "Begal and cream cheese", price: "45", id: "1", img: lunch1, description: "this is very good food for duet. it's a healthy and good food" },
        { name: "Begal and cream cheese", price: "45", id: "2", img: lunch2, description: "this is very good food for duet. it's a healthy and good food" },
        { name: "Begal and cream cheese", price: "45", id: "3", img: lunch3, description: "this is very good food for duet. it's a healthy and good food" },
        { name: "Begal and cream cheese", price: "45", id: "4", img: lunch4, description: "this is very good food for duet. it's a healthy and good food" },
        { name: "Begal and cream cheese", price: "45", id: "5", img: lunch5, description: "this is very good food for duet. it's a healthy and good food" },
        { name: "Begal and cream cheese", price: "45", id: "6", img: lunch6, description: "this is very good food for duet. it's a healthy and good food" },
    ]
    return (
        <div className='container grid md:grid-cols-3 gap-10 mx-auto'>
            {
                lunchItem.map(item =>
                    <Lunch key={item.id} item={item}></Lunch>
                )
            }
        </div>
    );
};

export default Lunchs;