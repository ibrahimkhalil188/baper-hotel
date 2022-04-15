import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { breakfast } from '../BreakFasts/BreakFasts';

const FoodDetails = () => {
    const [count, setCount] = useState(1)
    if (count <= 0) {
        setCount(1)
    }
    const { breakfastId } = useParams()
    const selectedItem = breakfast?.filter(item => item.id === breakfastId)
    const { img, name, price, description } = selectedItem[0]
    return (
        <div className=' container mx-auto flex justify-center items-center'>
            <div className='w-[70%] px-6'>
                <h1 className='text-4xl font-mono'>{name}</h1>
                <p className='py-6 text-xl'>{description}</p>
                <div className='flex justify-around items-center'>
                    <h1 className='text-4xl font-mono'>${price * count}</h1>
                    <div className='text-2xl flex justify-around items-center rounded-full border-2 px-4 py-2'>
                        <button onClick={() => setCount(count - 1)}><AiOutlineMinus></AiOutlineMinus></button>
                        <h1 className='px-4'>{count}</h1>
                        <button onClick={() => setCount(count + 1)}><AiOutlinePlus></AiOutlinePlus></button>
                    </div>
                </div>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default FoodDetails;