import React, { useContext } from 'react';
import { FriendsActivityContext } from '../../Context/FriendsContext';
import TimelineCard from './TimelineCard';

const TimeLineCards = ({filter}) => {
    const {allActivity,audio,video,text}=useContext(FriendsActivityContext);
    const filterData=filter==="all"?allActivity:allActivity.filter(item=>item.type===filter);
    return (
        <div className='space-y-3 pb-15 pt-2 flex flex-col-reverse'>
            {
                filterData.map((card,index)=><TimelineCard key={index} card={card}></TimelineCard>)
            }
        </div>
    );
};

export default TimeLineCards;