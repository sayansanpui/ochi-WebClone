import React, { useEffect, useState } from 'react'
import eyeBg1 from '../assets/Top-Viewbbcbv-1-scaled.jpg';
import eyeBg2 from '../assets/bgText.png';

const EyesTwo = () => {
    const [rotate, setRotate] = useState(0);

    const [xDistance, setXDistance] = useState(0);
    const [yDistance, setYDistance] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            // console.log(e.clientX, e.clientY);
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    })

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            // console.log(e.clientX, e.clientY);
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            const w = window.innerWidth / 4;
            const h = window.innerHeight / 4;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var x = (deltaX / w)*8;
            var y = (deltaY / h)*8;

            setXDistance(x);
            setYDistance(y);
        })
    })

    // console.log(xDistance, yDistance);

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed="-.7" className='relative w-full h-full bg-cover' style={{ backgroundImage: `url(${eyeBg1})` }}>
                <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10 '>
                    <div className='w-[14.7rem] h-[14.7rem] rounded-full bg-zinc-100'>
                        <div style={{ transform: `translate(${38 + xDistance}%, ${38 + yDistance}%)` }} className='absolute'>
                            <div className='relative w-[8.4rem] h-[8.4rem] rounded-full bg-zinc-900 flex items-center justify-center'>
                                <div className='text-white text-lg pFont1'>PLAY</div>
                                <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5">
                                    <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[14.7rem] h-[14.7rem] rounded-full bg-zinc-100'>
                        <div style={{ transform: `translate(${38 + xDistance}%, ${38 + yDistance}%)` }} className='absolute'>
                            <div className='relative w-[8.4rem] h-[8.4rem] rounded-full bg-zinc-900 flex items-center justify-center'>
                                <div className='text-white text-lg pFont1'>PLAY</div>
                                <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5">
                                    <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EyesTwo