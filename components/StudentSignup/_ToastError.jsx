import React, { useState, useEffect } from 'react';
//import { motion } from 'framer-motion';
//import tw, { styled, css } from 'twin.macro';

const secondsRemain = 4, interval = 100 / secondsRemain;

function MessageToast({ setOpen }) {

    const [barWidth, setBarWidth] = useState(100);

    useEffect(() => {
        // set up countdown to close and timer for progress bar
        let countDownClose, timer;
        countDownClose = setTimeout(() => setOpen(false), secondsRemain * 1000 + 100);
        timer = setInterval(() => {
            setBarWidth(prev => prev - interval);
        }, 1000);
        return () => {
            //console.log('unmounted')
            clearTimeout(countDownClose);
            clearInterval(timer);
        }
    }, []);


    return (
        <div className="fixed top-20 right-4 w-64 bg-white rounded-md text-gray-700 p-4">
            <h2>
                <span className="text-red-800">
                    &#x274C;
                </span>
                Ooops... 
            </h2>
            <p>
                Please fix the field error(s) highlighted in 
                <span className="text-red-600 font-bold"> red </span>
            </p>
            <div className="mt-3 flex justify-end">
                <button 
                    className="rounded-full p-1 w-1/4 text-center text-sm border border-black-700" 
                    onClick={() => setOpen(false)}
                >
                    Close
                </button>
            </div>
            <br />
            <div className="w-full bg-gray-200 h-1">
                <div className="rounded-sm bg-blue-600 h-1" style={{ width: `${barWidth}%`}}/>
            </div>
        </div>
    );
}

export default MessageToast;