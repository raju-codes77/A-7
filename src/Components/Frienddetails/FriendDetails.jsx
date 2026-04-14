import React from 'react';
import { useParams } from 'react-router';
import useFriends from '../hooks/useFriends';
import FrienddetailsCard from './FrienddetailsCard';

const FriendDetails = () => {

    

    const {id}=useParams();
    const {friends}=useFriends();

    const expectedFriend=friends.find(friend=>friend.id===Number(id));
    

    return (
        <FrienddetailsCard expectedFriend={expectedFriend}></FrienddetailsCard>
    );
};

export default FriendDetails;