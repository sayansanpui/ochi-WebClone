import { motion, useAnimation } from 'framer-motion'
import { Power4 } from "gsap/all";
import React, { useState } from 'react'

export const Featured = () => {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]
    const cardSize = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]

    const handelHover = (index) => {
        cards[index].start({ y: "0" })
        cardSize[index].start({ scale: "0.95" })
    }
    const handelHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
        cardSize[index].start({ scale: "1" })
    }


    return (
        <div className='w-full py-10 pt-[90px] pb-[150px] bg-[#f1f1f1]'>
            <div className='w-full px-[4rem] border-b-[1.2px] border-zinc-400 pb-[2.5rem]'>
                <h1 className='text-[3.7rem] pFont2 leading-[4rem] font-light tracking-tight'>Featured projects</h1>
            </div>
            <div className="px-[4rem]">
                <div className="cards w-full gap-y-[3rem] gap-x-[1rem] py-[4rem] grid md:grid-cols-2">
                    <div class="card">
                        <div class="text-sm uppercase mb-[1rem] flex items-center">
                            <span class="w-3 h-3 flex-shrink-0 rounded-full bg-current mr-3"></span>
                            <span className='text-[16px]'>Fyde</span>
                        </div>
                        <motion.div
                            onHoverStart={() => handelHover(0)}
                            onHoverEnd={() => handelHoverEnd(0)}
                            className="card container w-full relative"
                        >
                            <motion.div
                                animate={cardSize[0]}
                                className="card w-full h-full rounded-xl overflow-hidden transition duration-500">
                                <img src="https://github.com/sayansanpui/ochi-WebClone/blob/main/public/Fyde_Illustration_Crypto_2png.png?raw=true" alt="" />
                            </motion.div>
                            <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl uppercase text-[#ceea67] hFont1'>
                                {"Fyde".split('').map((item, index) =>
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[0]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                                    >
                                        {item}
                                    </motion.span>
                                )}
                            </h1>
                        </motion.div>
                        <div className='flex mt-[1.1rem]'>
                            <div className='mr-[1rem] mb-[1rem]'>
                                <div className='py-[3px] px-[12px] uppercase bg-transparent text-[1.1rem] rounded-[1.4rem] border-[1.2px] border-zinc-500 text-zinc-500'>Audit</div>
                            </div>
                            <div className='mr-[1rem] mb-[1rem]'>
                                <div className='py-[3px] px-[12px] uppercase bg-transparent text-[1.1rem] rounded-[1.4rem] border-[1.2px] border-zinc-500 text-zinc-500'>Copywriting</div>
                            </div>
                            <div className='mr-[1rem] mb-[1rem]'>
                                <div className='py-[3px] px-[12px] uppercase bg-transparent text-[1.1rem] rounded-[1.4rem] border-[1.2px] border-zinc-500 text-zinc-500'>Sales Deck</div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="text-sm uppercase mb-[1rem] flex items-center">
                            <span class="w-3 h-3 flex-shrink-0 rounded-full bg-current mr-3"></span>
                            <span className='text-[16px]'>Vise</span>
                        </div>
                        <motion.div
                            onHoverStart={() => handelHover(1)}
                            onHoverEnd={() => handelHoverEnd(1)}
                            className="card container w-full relative"
                        >
                            <motion.div
                                animate={cardSize[1]}
                                className="card w-full h-full rounded-xl overflow-hidden transition duration-500">
                                <img src="https://github.com/sayansanpui/ochi-WebClone/blob/main/public/Vise_front2-.jpg?raw=true" alt="" />
                            </motion.div>
                            <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl uppercase text-[#ceea67] hFont1'>
                                {"Vise".split('').map((item, index) =>
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[1]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                                    >
                                        {item}
                                    </motion.span>
                                )}
                            </h1>
                        </motion.div>
                        <div className='flex mt-[1.1rem]'>
                            <div className='mr-[1rem] mb-[1rem]'>
                                <div className='py-[3px] px-[12px] uppercase bg-transparent text-[1.1rem] rounded-[1.4rem] border-[1.2px] border-zinc-500 text-zinc-500'>Agency</div>
                            </div>
                            <div className='mr-[1rem] mb-[1rem]'>
                                <div className='py-[3px] px-[12px] uppercase bg-transparent text-[1.1rem] rounded-[1.4rem] border-[1.2px] border-zinc-500 text-zinc-500'>Company Presentation</div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="text-sm uppercase mb-[1rem] flex items-center">
                            <span class="w-3 h-3 flex-shrink-0 rounded-full bg-current mr-3"></span>
                            <span className='text-[16px]'>Trawa</span>
                        </div>
                        <motion.div
                            onHoverStart={() => handelHover(2)}
                            onHoverEnd={() => handelHoverEnd(2)}
                            className="card container w-full relative"
                        >
                            <motion.div
                                animate={cardSize[2]}
                                className="card w-full h-full rounded-xl overflow-hidden transition duration-500">
                                <img src="https://github.com/sayansanpui/ochi-WebClone/blob/main/public/public/Frame-3875.jpg?raw=true" alt="" />
                            </motion.div>
                            <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl uppercase text-[#ceea67] hFont1'>
                                {"Trawa".split('').map((item, index) =>
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[2]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                                    >
                                        {item}
                                    </motion.span>
                                )}
                            </h1>
                        </motion.div>
                        <div className='flex mt-[1.1rem]'>
                            <div className='mr-[1rem] mb-[1rem]'>
                                <div className='py-[3px] px-[12px] uppercase bg-transparent text-[1.1rem] rounded-[1.4rem] border-[1.2px] border-zinc-500 text-zinc-500'>Brand Identity</div>
                            </div>
                            <div className='mr-[1rem] mb-[1rem]'>
                                <div className='py-[3px] px-[12px] uppercase bg-transparent text-[1.1rem] rounded-[1.4rem] border-[1.2px] border-zinc-500 text-zinc-500'>Design Research</div>
                            </div>
                            <div className='mr-[1rem] mb-[1rem]'>
                                <div className='py-[3px] px-[12px] uppercase bg-transparent text-[1.1rem] rounded-[1.4rem] border-[1.2px] border-zinc-500 text-zinc-500'>Investor Deck</div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="text-sm uppercase mb-[1rem] flex items-center">
                            <span class="w-3 h-3 flex-shrink-0 rounded-full bg-current mr-3"></span>
                            <span className='text-[16px]'>Premium Blend</span>
                        </div>
                        <motion.div
                            onHoverStart={() => handelHover(3)}
                            onHoverEnd={() => handelHoverEnd(3)}
                            className="card container w-full relative"
                        >
                            <motion.div
                                animate={cardSize[3]}
                                className="card w-full h-full rounded-xl overflow-hidden transition duration-500">
                                <img src="https://github.com/sayansanpui/ochi-WebClone/blob/main/public/PB-Front-4.png?raw=true" alt="" />
                            </motion.div>
                            <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl uppercase text-[#ceea67] hFont1'>
                                {"Premium".split('').map((item, index) =>
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[3]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                                    >
                                        {item}
                                    </motion.span>
                                )}
                            </h1>
                        </motion.div>
                        <div className='flex mt-[1.1rem]'>
                            <div className='mr-[1rem] mb-[1rem]'>
                                <div className='py-[3px] px-[12px] uppercase bg-transparent text-[1.1rem] rounded-[1.4rem] border-[1.2px] border-zinc-500 text-zinc-500'>Branded Template</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <a className='py-5 px-9 bg-zinc-900 rounded-full text-white uppercase flex items-center justify-center'>
                        <span>View All Case Studies</span>
                        <div className='w-[10px] h-[10px] bg-white rounded-full ml-[22px]'></div>
                    </a>
                </div>
            </div>
        </div >
    )
}
