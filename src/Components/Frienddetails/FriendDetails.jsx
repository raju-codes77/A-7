import React from 'react';
import { useParams } from 'react-router';
import useFriends from '../hooks/useFriends';
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { IoArchiveOutline } from 'react-icons/io5';

const FriendDetails = () => {

     const friendStatus={
        overdue:"bg-red-500 rounded-full px-2 text-white",
        due_soon:"bg-yellow-500 rounded-full px-2 text-white",
        on_track:"bg-[#244d3f] rounded-full px-2 text-white"

    }

    const {id}=useParams();
    const {friends}=useFriends();

    const expectedFriend=friends.find(friend=>friend.id===Number(id));
    console.log(expectedFriend)

    return (
        <div className='w-3/4 mx-auto my-10'>
            <div className='grid grid-cols-5 gap-x-2 gap-y-2'>
                {/* profile card */}
                <div className=' col-span-2  row-span-2 '>

                         <div className="card bg-base-100  shadow-sm">
                    <figure className="">
                        <img
                        src={expectedFriend?.picture}
                        alt=""
                        className="rounded-full w-[100px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{expectedFriend?.name}</h2>
                        <p className={friendStatus[expectedFriend?.status]}>{expectedFriend?.status}</p>
                        <p className='rounded-full bg-green-100 px-3  text-green-500'>{expectedFriend?.tags}</p>
                        <p className='font-semibold text-gray-400'>"{expectedFriend?.bio}"</p>
                        
                        
                    </div>
                </div>
                    
                 </div>
                {/* daily since contact and goal days */}
                <div className=' col-span-3 bg--400'>
                    <div className='grid sm:grid-cols-3 gap-3'>
                          
                               <div className="card  bg-base-100 card-xs p-5 shadow-sm">
                                <div className="card-body">
                                    <h2 className="font-bold text-2xl text-[#244d3f] text-center">{expectedFriend?.days_since_contact}</h2>
                                    <p className='text-center text-l font-semibold text-gray-500'>Days Since Contact</p>
                                    
                                </div>
                                </div>
                               <div className="card  bg-base-100 card-xs p-5 shadow-sm">
                                <div className="card-body">
                                    <h2 className="font-bold text-2xl text-[#244d3f] text-center">{expectedFriend?.goal}</h2>
                                    <p className='text-center text-l font-semibold text-gray-500'>Goal(Days)</p>
                                    
                                </div>
                                </div>
                               <div className="card  bg-base-100 card-xs p-5 shadow-sm">
                                <div className="card-body">
                                    <h2 className="font-semibold text-2xl text-[#244d3f] text-center">{expectedFriend?.next_due_date}</h2>
                                    <p className='text-center text-l font-semibold text-gray-500'>Next Due</p>
                                    
                                </div>
                                </div>
                                

                    </div>   
                       </div>
                       {/* resoulation goal */}
                <div className='col-span-3 '>
                    
                    <div className='bg-base-100  p-5 shadow-sm'>
                            <div className='flex justify-between'>
                                <h2 className='font-bold text-[#244d3f]'>Relationship Goal</h2>
                                <button className='btn'>Edit</button>
                            </div>
                            <p className='font-semibold text-gray-400'>Connect every <span className='text-black font-bold'>{expectedFriend?.goal} days</span></p>
                    </div>
                    
               </div>

                {/* Snooze archieve and delete */}
                <div className='min-h-[30px] col-span-2  bg--400 space-y-4'> 
                    
                    <div className='bg-base-100  p-2 shadow-sm'> 
                        
                        <p className='font-semibold text-center flex items-center gap-1 justify-center'><RiNotificationSnoozeLine /> Snooze 2 Weeks</p>
                        
                    </div>

                    <div className='bg-base-100  p-2 shadow-sm'> 
                        
                        <p className='font-semibold text-center flex items-center gap-1 justify-center'><IoArchiveOutline /> Archive</p>
                        
                    </div>

                    <div className='bg-base-100  p-2 shadow-sm'> 
                        
                        <p className='font-semibold text-center text-red-600 flex items-center gap-1 justify-center'><RiDeleteBin5Line /> Delete</p>
                        
                    </div>
                    
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