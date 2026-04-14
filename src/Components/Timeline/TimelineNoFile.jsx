import React from 'react';
import { CiFileOff } from 'react-icons/ci';
import { Link } from 'react-router';

const TimelineNoFile = () => {
    return (
        <div className="w-3/4 mx-auto mt-10">
            
            <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-10 flex flex-col items-center text-center gap-4 hover:shadow-2xl transition-all duration-300">
                
                {/* Icon */}
                <div className="bg-green-100 p-5 rounded-full">
                    <CiFileOff className="text-5xl text-green-700" />
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    No Activity Found
                </h2>

                {/* Subtitle */}
                <p className="text-gray-500 max-w-md">
                    Start connecting with your friends by making a call or sending a text. Your timeline will appear here.
                </p>

                {/* Button (optional UI boost) */}
                <Link to={"/"} className="mt-3 px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 active:scale-95 transition">
                    Add Activity
                </Link>

            </div>
        </div>
    );
};

export default TimelineNoFile;