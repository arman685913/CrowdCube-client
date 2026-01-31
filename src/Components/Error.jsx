import React from 'react';

const Error = () => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col'>
            <h1 className='text-5xl font-bold font-serif text-red-600'>404</h1>           
            <div className="inline-grid *:[grid-area:/]">
                
                <div className="status status-error animate-ping"></div>
                <div className="status status-error"></div>
            </div>
            <p className='text-3xl italic font-bold text-green-600'>Not Found.</p>
        </div>
    );
};

export default Error;