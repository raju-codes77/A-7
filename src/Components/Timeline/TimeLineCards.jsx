import React, { useContext } from 'react';
import { FriendsActivityContext } from '../../Context/FriendsContext';
import TimelineCard from './TimelineCard';

const TimeLineCards = () => {
    const {allActivity,audio,video,text}=useContext(FriendsActivityContext);
    return (
        <div className='space-y-3 flex flex-col-reverse'>
            {
                allActivity.map((card,index)=><TimelineCard key={index} card={card}></TimelineCard>)
            }
        </div>
    );
};

export default TimeLineCards;