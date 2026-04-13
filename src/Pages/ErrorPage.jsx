import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
            <div className="text-center text-white">
                
                {/* 404 Number */}
                <h1 className="text-9xl font-extrabold drop-shadow-lg">404</h1>

                {/* Message */}
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                    Oops! Page Not Found
                </h2>

                <p className="mt-3 text-lg text-gray-200 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Button */}
                <div className="mt-6">
                    <a 
                        href="/" 
                        className="btn btn-lg bg-white text-purple-600 hover:bg-gray-200 border-none shadow-lg"
                    >
                        Go Back Home
                    </a>
                </div>

               

            </div>
        </div>
    );
};

export default ErrorPage;