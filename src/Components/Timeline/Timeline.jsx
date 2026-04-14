import React, { useContext } from 'react';
import { FriendsActivityContext } from '../../Context/FriendsContext';
import TimelineNoFile from './TimelineNoFile';
import TimelineCard from './TimelineCard';
import TimeLineCards from './TimeLineCards';

const Timeline = () => {

    const {audio,video,text}=useContext(FriendsActivityContext);
    return (
        <div className='w-3/4 mx-auto my-10'>
            <h2 className='font-bold text-2xl'>Timeline</h2>

            {/* tmeline filter */}
                    <div className="dropdown dropdown-center">
                        <div tabIndex={0} role="button" className="btn m-1">Filter Timeline  ⬇️</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>By Audio</a></li>
                            <li><a>By Vedio </a></li>
                            <li><a>By Text </a></li>
                        </ul>
                    </div>

                    {/* timeline card sectiom */}
                    
                        <div>
                            {
                                audio.length===0 && video.length===0 && text.length === 0?<TimelineNoFile></TimelineNoFile>:<TimeLineCards></TimeLineCards>

                        
                    
                            }
                        </div>
            
        </div>
    );
};

export default Timeline;