import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

// const LandingPage = () => {
//     return (
//         <div className='w-full h-screen px-[4rem]'>
//             <div className="textstructure pt-40">
//                 {["We create", "eye-opening", "presentations"].map((item, index) => {
//                     return <div className='masker'>
//                         <h1 className="text-[9.5rem] uppercase leading-[8.5vw] hFont1">
//                             {item}
//                         </h1>
//                     </div>
//                 })}
//             </div>
//              <div className='border-t-[1.2px] border-zinc-400 mt-48 flex justify-between items-center py-5 px-20'>
//                  <div className='px-[4rem]'>
//                      {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
//                          return <p className="text-md font-light tracking-tight leading-none">{item}</p>
//                      })}
//                  </div>
//              </div>
//         </div>
//     )
// }

// const LandingPage = () => {
//     return (
//         <div className='w-full h-screen'>
//             <div className='textstructure pt-40 px-[4rem] mb-40'>
//                 {["We create", "eye-opening", "presentations"].map((item, index) => {
//                     return (
//                         <div className='masker'>
//                             <div className=' h-[115px] overflow-hidden flex justify-start items-end'>
//                                 {index === 1 && (<div className='w-[155px] h-[95px] -top-[3px] relative bg-red-500 rounded-lg mr-3'></div>)}
//                                 <h1 className="text-[150px] uppercase leading-[115px] block relative text-start hFont1">
//                                     {item}
//                                 </h1>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//             <div className='border-t-[1.2px] border-zinc-400 mt-48 flex justify-between items-center py-5 px-[4rem]'>
//                 <div className='w-full flex text-[18px] font-thin text-zinc-700'>
//                     <div className='w-1/2 flex justify-between items-center'>
//                         <p className='pFont1'>For public and private companies</p>
//                     </div>
//                     <div className='w-1/2 flex justify-between items-center'>
//                         <p className='pFont1'>From the first pitch to IPO</p>
//                         <div className='start flex justify-center items-center gap-2'>
//                             <div className='px-3 py-[4px] border-[1.4px] border-zinc-700 rounded-full text-[16px] font-light uppercase'>Start The Project</div>
//                             <div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-zinc-700'>
//                                 <span className=' rotate-[45deg]'>
//                                     <FaArrowUpLong />
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

const LandingPage = () => {
    return (
        <div className='w-full h-screen'>
            <div className='textstructure pt-40 px-[4rem] mb-40'>
                {["We create", "eye-opening", "presentations"].map((item, index) => {
                    return (
                        <div className='masker'>
                            <div className='w-fit flex items-end overflow-hidden'>
                                {index === 1 && (
                                    <div className='mr-[0.9vw] w-[9vw] rounded-lg h-[5.7vw] -top-[0.3vw] relative bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover'></div>
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