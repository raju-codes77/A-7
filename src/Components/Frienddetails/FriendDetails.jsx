import React from 'react';

const FriendDetails = () => {
    return (
        <div className='w-3/4 mx-auto my-10'>
            <div className='grid grid-cols-5 gap-x-2 gap-y-2'>
                {/* profile card */}
                <div className='min-h-[50px] col-span-2  row-span-2 bg-green-400'>   </div>
                {/* daily since contact and goal days */}
                <div className='min-h-[30px] col-span-3 bg--400'>
                    <div className='grid grid-cols-3 gap-3'>
                            <div className='min-h-[30px] col-span bg-red-400'>   </div>
                <div className='min-h-[30px] col-span- bg-yellow-400'>   </div>
                     <div className='min-h-[30px] col-span- bg-gray-400'>   </div>

                    </div>
                    
                       </div>
                       {/* resoulation goal */}
                <div className='min-h-[30px] col-span-3 bg-yellow-400'>   </div>

                {/* Snooze archieve and delete */}
                <div className='min-h-[30px] col-span-2  bg--400 space-y-4'> 
                    
                    <div className='min-h-[30px] col-span bg-red-400'>   </div>
                <div className='min-h-[30px] col-span- bg-yellow-400'>   </div>
                     <div className='min-h-[30px] col-span- bg-gray-400'>   </div>
                      </div>

                      {/* Quick Check IN */}
                <div className='min-h-[30px] col-span-3 bg-gray-400'>  
                    
                    <div>

                    </div>
                     </div>
            </div>
        </div>
    );
};

export default FriendDetails;