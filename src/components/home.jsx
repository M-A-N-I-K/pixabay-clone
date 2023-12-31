import React, { useEffect, useState } from 'react'
import Navbar from './utils/navbar'
import SearchBar from './utils/searchBar'
import { ImageState } from './context/imageContext'
import ImagesSection from './utils/imagesSection'
import axios from 'axios'
import ProductPage from './utils/productPage'

const API_KEY = import.meta.env.VITE_API_KEY;

const home = () => {
    const { searchQuery, images } = ImageState();
    const [randomImage, setRandomImage] = useState("https://tecdn.b-cdn.net/img/new/standard/city/078.jpg");

    async function fetchRandomImage(searchTerm) {
        const response = await axios.get(
            `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&per_page=100`
        );
        const image = response.data.hits;
        const random = image[Math.floor(Math.random() * image.length)].largeImageURL;
        setRandomImage(random);
    }



    useEffect(() => {
        fetchRandomImage("dark");
    }, [])

    return (
        <>
            <div
                className={`relative flex flex-col items-center justify-center text-white bg-cover bg-no-repeat bg-[50%] h-[100vh] bg-[url(${randomImage})]`} style={{ backgroundImage: `url(${randomImage})` }}>
                <Navbar />
                <div
                    className="flex flex-col items-center justify-center h-[30vh] w-[100vw] mt-14">
                    <SearchBar />
                </div>
                {
                    searchQuery !== "" ?
                        <h1 className='text-3xl sm:text-5xl font-bold'>Results : {searchQuery}</h1> : ""
                }
                {
                    searchQuery !== "" ?
                        <ImagesSection images={images} /> : ""
                }
                <ProductPage />
            </div >
        </>

    )
}

export default home
