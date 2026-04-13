import React, { Suspense } from 'react';
import { FaPlus } from 'react-icons/fa';
import FriendsList from '../FriendsList/FriendsList';

const Banner = () => {
    return (
        <div className=' mt-5'>
            <div className='text-center container mx-auto space-y-3'>
                <h2 className='font-bold text-4xl '>
                    Friends to keep close in your life
                </h2>
                <p className='text-sm text-gray-400'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships t.hat matter most
                </p>
                <button className='btn bg-[#244d3f] text-white'> <FaPlus />Add a Friend</button>
            </div>

            <div className='mt-8 w-3/4 mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5' >
                    <div className='shadow rounded px-3 py-3 text-center'>
                        <h2 className='font-bold text-2xl text-[#244d3f]'>10</h2>
                        <p className='text font-semibold text-gray-600'>Total Friends</p>
                    </div>
                    <div className='shadow rounded px-3 py-3 text-center'>
                        <h2 className='font-bold text-2xl text-[#244d3f]'>3</h2>
                        <p className='text font-semibold text-gray-600'>On Track</p>
                    </div>
                    <div className='shadow rounded px-3 py-3 text-center'>
                        <h2 className='font-bold text-2xl text-[#244d3f]'>6</h2>
                        <p className='text font-semibold text-gray-600'>Need Attention</p>
                    </div>
                    <div className='shadow rounded px-3 py-3 text-center'>
                        <h2 className='font-bold text-2xl text-[#244d3f]'>12</h2>
                        <p className='text font-semibold text-gray-600'>Interactions this Month</p>
                    </div>
                </div>
            </div>
           <Suspense fallback={ <div className='flex justify-center py-8'>
            <span className="loading loading-spinner loading-xl"></span>

           </div>}>
                 <FriendsList></FriendsList>;
           </Suspense>
        </div>
        
    );
    
};

export default Banner;