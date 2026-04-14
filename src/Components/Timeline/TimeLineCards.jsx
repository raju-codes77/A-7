import React, { useContext } from 'react';
import { FriendsActivityContext } from '../../Context/FriendsContext';
import TimelineCard from './TimelineCard';

const TimeLineCards = () => {
    const {audio,video,text}=useContext(FriendsActivityContext);
    const allcards=[
        ...audio.map(item=>({...item,type:"Audio"})),
        ...video.map(item=>({...item,type:"Video"})),
        ...text.map(item=>({...item,type:"Text"})),
    ]
    return (
        <div className='space-y-3'>
            {
                allcards.map((card,index)=><TimelineCard key={index} card={card}></TimelineCard>)
            }
        </div>
    );
};

export default TimeLineCards;