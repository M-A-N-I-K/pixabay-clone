import React from 'react'
import ImageCard from './imageCard';

const imagesSection = ({ images }) => {
    return (
        <>
            <div className='w-[100vw] h-[55vh] mt-4 p-8 bg-white grid grid-cols-1 sm:gird-cols-2 md:grid-cols-3 items-end gap-6 overflow-y-visible z-25'>
                {images?.map((image) => {
                    return (
                        <ImageCard previewUrl={image.previewURL} largeImageUrl={image.largeImageURL} tags={image.tags} />
                    );
                })}
            </div>
        </>
    )
}

export default imagesSection
