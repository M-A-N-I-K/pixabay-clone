import React from 'react'

const productPage = ({ image, showProduct, setShowProduct }) => {

    return (
        <div className={`absolute left-0 sm:left-14 bottom-2 z-30 ${showProduct ? "flex" : "hidden"} flex-col h-[100vh] sm:h-[90vh] bg-gray-100 w-[100vw] sm:w-[90vw] rounded mt-6`}>
            <div className='p-4 bg-gray-200 w-full flex justify-between'>
                <h1 className='text-black font-semibold text-lg'>Preview ID : {image?.id}</h1>
                <svg onClick={() => setShowProduct(!showProduct)} className='cursor-pointer h-4 w-4' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="121.31px" height="122.876px" viewBox="0 0 121.31 122.876" enableBackground="new 0 0 121.31 122.876" space="preserve"><g><path fillRule="evenodd" clipRule="evenodd" d="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z" /></g></svg>
            </div>
            <div className="p-4 flex flex-col md:flex-row items-center">
                <div className="px-8 items-stretch">
                    <div className="h-full w-full sm:w-11/12 rounded-lg bg-gray-100">
                        <img className='h-full sm:h-3/4  rounded-lg ' src={image?.largeImageURL} alt="" />
                    </div>
                </div>
                <div className='text-gray-500 p-4 h-full flex flex-col justify-between w-full sm:w-1/2'>
                    <div>
                        <h1 className='text-gray-800'>Download</h1>
                    </div>
                    <div className='flex flex-col text-xs'>
                        <div className='flex border-2 border-gray-200 px-4 py-2 justify-between'>
                            <p>Small</p>
                            <p>640 x 960</p>
                        </div>
                        <div className='flex border-2 border-gray-200 px-4 py-2 justify-between'>
                            <p>Medium</p>
                            <p>1640 x 2660</p>
                        </div>
                        <div className='flex border-2 border-gray-200 px-4 py-2 justify-between'>
                            <p>Big</p>
                            <p>2640 x 3960</p>
                        </div>
                        <div className='flex border-2 border-gray-200 px-4 py-2 justify-between'>
                            <p>Original</p>
                            <p>3640 x 5960</p>
                        </div>
                        <button className='px-4 py-2 rounded-sm text-white text-sm bg-[#4BC34B]'>Download for free!</button>
                    </div>
                    <div>
                        <h1 className='mt-2 sm:mt-0 text-gray-800'>Information</h1>
                        <div className='grid grid-cols-3 gap-2 text-xs text-gray-600'>
                            <div>
                                <p>User</p>
                                <h6 className='text-md font-bold text-black'>{image?.user}</h6>
                            </div>
                            <div>
                                <p>UserId</p>
                                <h6 className='text-md font-bold text-black'>{image?.user_id}</h6>
                            </div>
                            <div>
                                <p>Type</p>
                                <h6 className='text-md font-bold text-black'>{image?.type}</h6>
                            </div>
                            <div>
                                <p>Views</p>
                                <h6 className='text-md font-bold text-black'>{image?.views}</h6>
                            </div>
                            <div>
                                <p>Downloads</p>
                                <h6 className='text-md font-bold text-black'>{image?.downloads}</h6>
                            </div>
                            <div>
                                <p>Likes</p>
                                <h6 className='text-md font-bold text-black'>{image?.likes}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default productPage
