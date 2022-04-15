import React from 'react';
import CustomLink from '../../../Shared/CustomLink/CustomLink';

const FoodHeader = () => {
    return (
        <div className='container text-lg font-bold my-12 flex justify-center'>
            <CustomLink to="breakfast">Breakfast</CustomLink>
            <CustomLink className='px-10' to="lunch">Lunch</CustomLink>
            <CustomLink to="dinner">Dinner</CustomLink>
        </div>
    );
};

export default FoodHeader;