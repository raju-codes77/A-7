import React, { useContext } from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import { FriendsActivityContext } from '../../Context/FriendsContext';

const Chart = () => {
    const {audio,video,text}=useContext(FriendsActivityContext);
    const data=[
        {name:"Audio",value:audio.length,fill:"#244d3f"},
        {name:"Video",value:video.length,fill:"#37a163"},
        {name:"Text",value:text.length,fill:"#7e35e1"}
    ]
    return (
        <div className='w-3/4 mx-auto my-5'>
            <h2 className='text-2xl font-bold p-5'>Friendship Analytics</h2>
            <div className='bg-base-200 shadow-sm p-10'>
                <h2>By Interaction Type</h2>
                 <div className='flex justify-center '>
            
            <PieChart style={{ width: '100%', maxWidth: '300px', maxHeight: '60vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Tooltip></Tooltip>
        </PieChart>
                </div>
                <div className='mt-3'>
                    <ul className='flex justify-center gap-3'>
                        <li className='flex items-center gap-1'><span className='h-3 w-3 rounded-full bg-[#7e35e1] inline-block'></span>Text</li>
                        <li className='flex items-center gap-1'><span className='h-3 w-3 rounded-full bg-[#244d3f] inline-block'></span>Audio</li>
                        <li className='flex items-center gap-1'><span className='h-3 w-3 rounded-full bg-[#37a163] inline-block'></span>Vedio</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Chart;