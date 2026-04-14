import React, { useContext } from 'react';
import FriendsCard from '../Friendscard/FriendsCard';
import useFriends from '../hooks/useFriends';
import { FriendsActivityContext } from '../../Context/FriendsContext';

// const friendsList=fetch('/friends.json').then(res=>res.json());

const FriendsList = () => {
    const contextData=useContext(FriendsActivityContext);
    console.log(contextData,"context data")
    const {friends}=useFriends();
    return (
        <div className='w-3/4 mx-auto mt-8'>
            <h2 className='font-bold my-5'>Your Friends</h2>

            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {friends.map(friend=><FriendsCard key={friend.id} friend={friend}></FriendsCard>)}
            </div>
            
        </div>
    );
};

export default FriendsList;