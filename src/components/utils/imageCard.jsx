import React, { useState } from 'react'
import ProductPage from './productPage'

const ImageCard = ({ image, largeImageUrl, previewUrl, tags }) => {
    const [showProduct, setShowProduct] = useState(false);
    return (
        <>
            {showProduct ? <ProductPage image={image} setShowProduct={setShowProduct} showProduct={showProduct} /> : ""}
            <div onClick={() => setShowProduct(!showProduct)} className="max-w-md w-[350px] h-[350px] justify-center items-center bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                    <img className="rounded-lg object-fit h-[90%]" src={`${largeImageUrl}`} alt="" />
                </a>
                <div className="p-5 py-2">
                    <a href="#">
                        <h5 className="mb-2 text-center text-md font-semibold text-gray-500">{tags}</h5>
                    </a>
                </div>
            </div>
        </>

    )
}

export default ImageCard
