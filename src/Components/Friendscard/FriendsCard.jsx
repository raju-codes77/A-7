import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({friend}) => {
    const friendStatus={
        overdue:"bg-red-500 rounded-full px-2 text-white",
        due_soon:"bg-yellow-500 rounded-full px-2 text-white",
        on_track:"bg-[#244d3f] rounded-full px-2 text-white"

    }
    return (
        <Link to={"/details"}>
            <div className="card bg-base-100 w-56 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={friend.picture}
      alt="Shoes"
      className="rounded-full w-[100px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{friend.name}</h2>
    <p className='text-gray-500'>{friend.days_since_contact}d ago</p>
    <p className='rounded-full bg-green-100 px-3  text-green-500'>{friend.tags}</p>
    <p className={friendStatus[friend.status]}>{friend.status}</p>
    
  </div>
</div>
        </Link>
    );
};

export default FriendsCard;