import { useState } from "react";
import { FriendsActivityContext } from "./FriendsContext";




const FriendsActivity = ({children}) => {
    const [audio,setAudio]=useState([]);
    const [video,setVideo]=useState([]);
    const [text,setText]=useState([]);
    const [allActivity,setAllActivity]=useState([]);
    return <FriendsActivityContext.Provider value={{allActivity,setAllActivity,audio,setAudio,video,setVideo,text,setText}}>{children}</FriendsActivityContext.Provider>;
};

export default FriendsActivity;