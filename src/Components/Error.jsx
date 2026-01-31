import React from 'react';

const Error = () => {
    return (
        <div className='min-h-screen border m-10 rounded-4xl border-green-400 flex justify-center items-center flex-col'>
            <img className='w-20' src='https://thumbs.dreamstime.com/b/sad-emoticon-18589362.jpg' alt="" />
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