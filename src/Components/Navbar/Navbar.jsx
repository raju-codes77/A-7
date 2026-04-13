import React from 'react';
import logo from '../../../public/assets/logo.png'
import { NavLink } from 'react-router';
import { IoMdHome } from 'react-icons/io';
import { RiTimeLine } from 'react-icons/ri';
import { ImStatsDots } from 'react-icons/im';

const Navbar = () => {
    return (
        <div className=' shadow py-4'>
            <nav className='container mx-auto'>
                <div className='flex justify-between'>
                    <img src={logo} alt="" />
                <ul className='flex justify-around gap-3'>
                    <li > <NavLink className={({isActive})=>`px-2 py-1 rounded flex font-semibold items-center gap-1 ${isActive?"bg-[#244d3f] text-white  ":""}`} to={"/"}><IoMdHome />Home</NavLink></li>
                    <li> <NavLink className={({isActive})=>`px-2 py-1 rounded flex font-semibold items-center gap-1 ${isActive?"bg-[#244d3f] text-white  ":""}`} to={"/timeline"}><RiTimeLine />Timeline</NavLink></li>
                    <li> <NavLink className={({isActive})=>`px-2 py-1 rounded flex font-semibold items-center gap-1 ${isActive?"bg-[#244d3f] text-white  ":""}`} to={"/stats"}><ImStatsDots />Stats</NavLink></li>
                </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;