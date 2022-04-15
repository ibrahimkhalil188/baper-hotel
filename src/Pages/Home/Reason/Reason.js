import React from 'react';
import staff1 from '../../../Images/adult-blur-blurred-background-687824.png'
import staff2 from '../../../Images/architecture-building-city-2047397.png'
import staff3 from "../../../Images/chef-cook-food-33614.png"
import { BsArrowRightShort } from "react-icons/bs"
const Reason = () => {
    const reasons = [
        { id: "1", img: staff1, title: "Fastest delivery", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" },
        { id: "2", img: staff3, title: "Home delivery", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the' },
        { id: "3", img: staff2, title: "A Good Auto Responder", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" }

    ]
    return (
        <div >
            <h1 className='text-4xl text-center mt-20 font-bold text-[#e51a4b]'>Why you should choose us</h1>
            <div className='grid md:grid-cols-3 container mx-auto gap-6 mt-20'>
                {reasons.map(reason =>
                    <div key={reason.id} className='p-4 hover:shadow-md'>
                        <img src={reason.img} alt="" />
                        <h1 className='text-2xl text-center my-6'>{reason.title}</h1>
                        <p>{reason.description}</p>
                        <div className='flex justify-end align-bottom'>
                            <button className="flex  justify-center items-center text-[#e51a4b] text-2xl font-bold">See more <span className='pt-2 text-4xl'>< BsArrowRightShort /></span></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Reason;