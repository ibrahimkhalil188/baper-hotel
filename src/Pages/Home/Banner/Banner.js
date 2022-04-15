import React from 'react';
import BannerImage from "../../../Images/bannerbackground.png"
const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center items-center' style={{ height: "80vh", width: "100%", backgroundImage: `url(${BannerImage})` }}>
                <div>
                    <h1 className='text-4xl font-mono font-bold'>Best Food Waiting For Your Belly</h1>
                    <div className='relative' >
                        <input className='w-[500px] h-[40px] outline-none border-2 rounded-full p-4 ' type="text" placeholder="Search" value="" />
                        <button className='bg-[#e51a4b] text-white rounded-full px-6 py-2 absolute top-0 right-150' id="searchQuerySubmit" type="submit">
                            Search
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;