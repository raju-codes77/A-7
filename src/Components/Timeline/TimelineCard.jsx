import React from 'react';
import { FaVideo } from 'react-icons/fa';
import { IoIosText } from 'react-icons/io';
import { MdPhoneCallback } from 'react-icons/md';

const TimelineCard = ({card}) => {
   
    return (
        <div className='bg-base-100 shadow-sm p-3 border border-gray-200 rounded'>
            <div className='flex gap-3 items-center'>
                <p>
                    
                    {card.type ==="Text"&& <IoIosText />}
                    {card.type ==="Audio"&& <MdPhoneCallback />}
                    {card.type ==="Video"&& <FaVideo />}


                </p>
                <div>
                    <h2><span className='font-bold'>{card.type} </span> with {card.name}</h2>
                    <p className='text-gray-400'>{card.time}</p>
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;