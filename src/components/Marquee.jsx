import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    return (
        <div className='w-full py-28 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
            <div className="text border-t-[0.1px] border-b-[0.1px] border-zinc-100 text-white flex gap-24  whitespace-nowrap">
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 15}} className='text-[30rem] leading-none font-semibold hFont1 uppercase -mt-24 -mb-14'>We are Ochi</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 15}} className='text-[30rem] leading-none font-semibold hFont1 uppercase -mt-24 -mb-14'>We are Ochi</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 15}} className='text-[30rem] leading-none font-semibold hFont1 uppercase -mt-24 -mb-14'>We are Ochi</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 15}} className='text-[30rem] leading-none font-semibold hFont1 uppercase -mt-24 -mb-14'>We are Ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee