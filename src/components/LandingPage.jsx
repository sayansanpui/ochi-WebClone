import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.5" className='w-full h-screen'>
            <div className='textstructure pt-40 px-[4rem] mb-40'>
                {["We create", "eye-opening", "presentations"].map((item, index) => {
                    return (
                        <div className='masker'>
                            <div className='w-fit flex items-end overflow-hidden'>
                                {index === 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "9vw" }}
                                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                        className='mr-[0.9vw] w-[9vw] rounded-lg h-[5.7vw] -top-[0.3vw] relative bg-[url("content-image01.jpg")] bg-cover'
                                    ></motion.div>
                                )}
                                <h1 className="pt-[1vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] -top-[1.3vw] relative hFont1">
                                    {item}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='border-t-[1.2px] border-zinc-400 mt-48 flex justify-between items-center py-5 px-[4rem]'>
                <div className='w-full flex text-[18px] font-thin text-zinc-700'>
                    <div className='w-1/2 flex justify-between items-center'>
                        <p className='pFont1'>For public and private companies</p>
                    </div>
                    <div className='w-1/2 flex justify-between items-center'>
                        <p className='pFont1'>From the first pitch to IPO</p>
                        <div className='start flex justify-center items-center gap-2'>
                            <div className='px-3 py-[5px] border-[1.4px] border-zinc-700 rounded-full text-[16px] font-light uppercase cursor-pointer transition ease-in-out hover:bg-black hover:text-white duration-900'>Start The Project</div>
                            <div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-zinc-700 cursor-pointer hover:bg-black hover:text-white'>
                                <span className=' rotate-[45deg]'>
                                    <FaArrowUpLong />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LandingPage