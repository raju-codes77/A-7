import React, { useContext, useState } from 'react';
import { FriendsActivityContext } from '../../Context/FriendsContext';
import TimelineNoFile from './TimelineNoFile';
import TimelineCard from './TimelineCard';
import TimeLineCards from './TimeLineCards';

const Timeline = () => {

    const [filter,setFilter]=useState("all");

    const {audio,video,text}=useContext(FriendsActivityContext);
    return (
        <div className='w-3/4 mx-auto my-10'>
            <h2 className='font-bold text-2xl'>Timeline</h2>

            {/* tmeline filter */}
                    <div className="dropdown dropdown-center">
                        <div tabIndex={0} role="button" className="btn m-1">Filter Timeline  ⬇️</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 space-y-3 shadow-sm">
                            <button className='hover:bg-gray-200 active:scale-90 font-semibold'  onClick={()=>setFilter("Audio")}><a>By Audio</a></button>
                            <button className='hover:bg-gray-200 active:scale-90 font-semibold' onClick={()=>setFilter("Video")}><a>By Video </a></button>
                            <button className='hover:bg-gray-200 active:scale-90 font-semibold' onClick={()=>setFilter("Text")}><a>By Text </a></button>
                            <button className='hover:bg-gray-200 active:scale-90 font-semibold' onClick={()=>setFilter("all")}><a>Show All </a></button>
                        </ul>
                    </div>
                    {/* timeline card sectiom */}
                    
                        <div>
                            {
                                audio.length===0 && video.length===0 && text.length === 0?<TimelineNoFile></TimelineNoFile>:<TimeLineCards filter={filter}></TimeLineCards>

                        
                    
                            }
                        </div>
            
        </div>
    );
};

export default Timeline;