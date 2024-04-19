import React from 'react'

const About = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full pt-24 pb-[4rem] rounded-tl-3xl rounded-tr-3xl bg-[#ceea67]'>
            <div className=' max-w-[1341px] ml-[4rem] mb-[4rem]'>
                <h1 className='text-[3.7rem] pFont2 leading-[4rem] font-light tracking-tight'>
                    Ochi is a strategic partner for fast-growing tech businesses that need to&nbsp;
                    <u className='no-underline'>raise funds</u>
                    ,&nbsp;
                    <u className='no-underline'>sell products</u>
                    ,&nbsp;
                    <u className='no-underline'>explain complex ideas</u>
                    , and&nbsp;
                    <u className='no-underline'>hire great people</u>.
                </h1>
            </div>
            <div className='border-t-[1.2px] border-zinc-400 mb-28'>
                <div className='pl-[4rem] py-2 grid grid-cols-12'>
                    <div className=' col-span-6'>
                        <p className='pFont1 text-lg'>What you can expect:</p>
                    </div>
                    <div className=' col-span-4'>
                        <div className='max-w-[320px]'>
                            <p className='mb-[35px] pFont1 text-lg'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                            <p className='pFont1 text-lg'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                        </div>
                    </div>
                    <div className=' col-span-2 flex justify-start items-end'>
                        <div>
                            <p className='mb-[17.5px] pFont1 text-lg'>S;</p>
                            <ul>
                                <li >
                                    <a className='no-underline pFont1 text-lg' href="">Instagram</a>
                                </li>
                                <li >
                                    <a className='no-underline pFont1 text-lg' href="">Behance</a>
                                </li>
                                <li >
                                    <a className='no-underline pFont1 text-lg' href="">Facebook</a>
                                </li>
                                <li >
                                    <a className='no-underline pFont1 text-lg' href="">Linkedin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className='border-t-[1.2px] border-zinc-400'>
                <div className='w-full px-[4rem] py-2 flex'>
                    <div className='w-1/2'>
                        <h2 className='mb-5 text-[3.7rem] pFont2 leading-[4rem] font-light tracking-tight'>Our approach:</h2>
                        <a className='py-5 w-[190px] bg-zinc-900 rounded-full text-white uppercase flex items-center justify-center'>
                            <span>Read More</span>
                            <div className='w-[10px] h-[10px] bg-white rounded-full ml-[22px]'></div>
                        </a>
                    </div>
                    <div className='w-1/2 h-[60vh] bg-[url("Homepage-Photo.jpg")] bg-cover rounded-xl'></div>
                </div>
            </div>
        </div>
    )
}

export default About