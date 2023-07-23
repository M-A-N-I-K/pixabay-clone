import React from 'react'

const navbar = () => {
    return (
        <nav
            className="fixed top-0 z-20 flex w-[90vw] h-[10vh] items-center justify-between py-2 text-white shadow-sm rounded-xl pl-2 sm:pl-16 bg-[rgba(217,217,217,0.2)] m-4 border-[8.906px] border-transparent backdrop-blur-[25.034873962402344px]">
            <div>
                <p className='text-white text-sm sm:text-normal'>Homepage</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-sm text-normal'>Login</p>
                <button className='px-2 sm:px-4 text-xs sm:text-normal inline-flex py-2 sm:py-1 font-bold cursor-pointer border-white rounded-xl border-2 bg-transparent mx-4'>
                    Create Account
                </button>
            </div>
        </nav>
    )
}

export default navbar
