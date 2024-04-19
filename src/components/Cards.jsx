import React from 'react'

export const Cards = () => {
    return (
        <div className='w-full h-screen bg-[#f1f1f1]'>
            <div className='w-full px-[4rem] border-b-[1.2px] border-zinc-400 pb-[2.5rem]'>
                <h1 className='text-[3.7rem] pFont2 leading-[4rem] font-light tracking-tight'>Featured Cards</h1>
            </div>
            <div className='px-[4rem] flex justify-center items-center gap-[1rem] mt-[7rem]'>
                <div className='cardcontainer h-[50vh] w-1/2'>
                    <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                        <img className='w-36' src="https://github.com/sayansanpui/ochi-WebClone/blob/main/public/logo001.svg?raw=true" alt="" />
                        <button className='absolute px-5 py-1 rounded-full border-[1px] left-10 bottom-10 text-[#a7cc61] border-[#a7cc61] uppercase'>&copy;2019-2022</button>
                    </div>
                </div>
                <div className='cardcontainer flex gap-[1rem] w-1/2 h-[50vh]'>
                    <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
                        <img className='w-36' src="https://github.com/sayansanpui/ochi-WebClone/blob/main/public/logo002.svg?raw=true?raw=true" alt="" />
                        <button className='absolute px-5 py-1 rounded-full border-[1px] left-10 bottom-10 text-[#f1f1f1] border-[#f1f1f1] uppercase'>Rating 5.0 on Clutch</button>
                    </div>
                    <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
                        <img className='w-24' src="https://github.com/sayansanpui/ochi-WebClone/blob/main/public/logo003.png?raw=true" alt="" />
                        <button className='absolute px-5 py-1 rounded-full border-[1px] left-10 bottom-10 text-[#f1f1f1] border-[#f1f1f1] uppercase'>Business Bootcamp Alumni</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
