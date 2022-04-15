import React from 'react';

const BreackFast = ({ item }) => {
    const { name, img, description, price } = item
    return (
        <div className=' p-6 mx-6 hover:shadow-2xl  hover:-translate-y-4 hover:skew-y-0 hover:brightness-125'>
            <img className='w-[220px] mx-auto ' src={img} alt="" />
            <h1 className='text-2xl p-2 text-center'>{name}</h1>
            <p className='text-lg'>{description.slice(0, 60) + "..."}</p>
            <h1 className='text-3xl p-4 text-bold text-center font-mono'>Price:${price}</h1>
        </div>
    );
};

export default BreackFast;