import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='bg-[#244d3f]  mt-5 py-10'>
               <div className='text-white text-center space-y-3 w-3/4 mx-auto'>
                    <h2 className='text-5xl font-bold'>KeenKeeper</h2>
                    <p className='text-sm'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <p className='font-bold'>Social Links</p>
                    <div>
                        <ul className='flex justify-center gap-2 text-black'>
                            <li className='bg-white rounded-full px-2 py-2'><FaInstagram /></li>
                            <li className='bg-white rounded-full px-2 py-2'><FaFacebook /></li>
                            <li className='bg-white rounded-full px-2 py-2'><FaXTwitter /></li>
                        </ul>
                    </div>

                    <div>
                          <div className="divider"></div>
                          <div className='flex flex-col-reverse sm:flex-row  text-center sm:justify-between  text-gray-300 space-y-2'>
                            <p className='text-sm'>©2026 KeenKeeper. All rights reserved.</p>
                            <div className='sm:flex gap-3 space-y-2 text-sm text-center'>
                                <p>Privacy Policy</p>
                                <p>Terms of Service</p>
                                <p>Cookies</p>
                            </div>
                          </div>
                    </div>
               </div>
        </footer>
    );
};

export default Footer;