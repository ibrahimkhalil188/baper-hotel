import React from 'react';
import dinner1 from "../../../../Images/dinner/dinner1.png"
import dinner2 from "../../../../Images/dinner/dinner2.png"
import dinner3 from "../../../../Images/dinner/dinner3.png"
import dinner4 from "../../../../Images/dinner/dinner4.png"
import dinner5 from "../../../../Images/dinner/dinner5.png"
import dinner6 from "../../../../Images/dinner/dinner6.png"
import Dinner from './Dinner/Dinner';
const Dinners = () => {
    const dinners = [
        { name: "Backed chicken", id: "1", price: '65', img: dinner1, description: "this is very good food for duet. it's a healthy and good food" },
        { name: "Backed chicken", id: "2", price: '65', img: dinner2, description: "this is very good food for duet. it's a healthy and good food" },
        { name: "Backed chicken", id: "3", price: '65', img: dinner3, description: "this is very good food for duet. it's a healthy and good food" },
        { name: "Backed chicken", id: "4", price: '65', img: dinner4, description: "this is very good food for duet. it's a healthy and good food" },
        { name: "Backed chicken", id: "5", price: '65', img: dinner5, description: "this is very good food for duet. it's a healthy and good food" },
        { name: "Backed chicken", id: "6", price: '65', img: dinner6, description: "this is very good food for duet. it's a healthy and good food" },
    ]
    return (
        <div className='container grid md:grid-cols-3 gap-10 mx-auto'>
            {
                dinners.map(item =>
                    <Dinner key={item.id} item={item}></Dinner>
                )
            }
        </div>
    );
};

export default Dinners;