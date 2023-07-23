import React from 'react'
import ImagesSection from "./imagesSection"
import Category from './category'
import { ImageState } from "../context/imageContext"
const searchBar = () => {
    const { searchQuery, setSearchQuery } = ImageState();
    return (
        <>
            <div className='flex flex-col items-center'>
                {
                    searchQuery === "" ?
                        <h1 className="mt-6 mb-16 text-5xl font-bold tracking-tight text-center md:text-6xl xl:text-7xl">
                            Discover over 2,00,000 <br /><span>free stock images</span>
                        </h1>
                        : ""
                }
                <div className='relative'>
                    <svg className='px-4 w-14 h-12 border-r-[1.5px] border-white absolute left-[5px] z-10 top-[5px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 23" fill="none">
                        <path d="M19.9219 20.3906L18.1406 18.6094M10.5703 19.5C11.6814 19.5 12.7816 19.2812 13.8082 18.8559C14.8347 18.4307 15.7674 17.8075 16.5531 17.0218C17.3388 16.2362 17.962 15.3035 18.3872 14.2769C18.8124 13.2504 19.0312 12.1502 19.0312 11.0391C19.0312 9.92796 18.8124 8.82773 18.3872 7.8012C17.962 6.77467 17.3388 5.84195 16.5531 5.05628C15.7674 4.27061 14.8347 3.64738 13.8082 3.22218C12.7816 2.79697 11.6814 2.57812 10.5703 2.57813C8.32633 2.57813 6.17426 3.46954 4.58753 5.05628C3.00079 6.64301 2.10938 8.79508 2.10938 11.0391C2.10937 13.283 3.00079 15.4351 4.58753 17.0218C6.17426 18.6086 8.32633 19.5 10.5703 19.5Z" stroke="white" strokeWidth="1.33594" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input type='text' onChange={(e) => { e.preventDefault(), setSearchQuery(e.target.value) }} placeholder='Search' className='inline-flex h-[10vh] w-[70vw] placeholder-current rounded-xl pl-16 bg-[rgba(217,217,217,0.2)] border-[8.906px] border-transparent backdrop-blur-[25.034873962402344px] justify-between items-center' />
                    <button className='absolute right-4 top-4 px-4 inline-flex py-1 font-bold border-white rounded-xl border-2 bg-transparent mr-4'>
                        Go!
                    </button>
                </div>
                {
                    searchQuery === "" ?
                        <Category /> : ""
                }
            </div>
        </>
    )
}

export default searchBar
