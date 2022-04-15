import React from 'react';
import logo from '../../../Images/logo2.png'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='container mx-auto h-[80px] flex  justify-between items-center'>
            <div>
                <img className='h-[50px]' src={logo} alt="" />
            </div>
            <div className='flex items-center font-semibold'>
                <span className='text-2xl'>< AiOutlineShoppingCart /></span>
                <Link className='text-xl px-6' to="login">Login</Link>
                <Link className='bg-[#e51a4b] text-white px-4 py-2 rounded-full' to="singup">Sing Up</Link>
            </div>
        </div>
    );
};

export default Header;