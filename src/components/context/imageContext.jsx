import React, { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios';
export const ImageContext = createContext();
const API_KEY = import.meta.env.VITE_API_KEY;

const ImageContextProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [images, setImages] = useState([]);
    async function getImages() {
        try {
            if (searchQuery !== "") {
                const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo`);
                console.log(response.data.hits);
                setImages(response.data.hits);
            }
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getImages(searchQuery)
    }, [searchQuery])

    return (
        <ImageContext.Provider value={{ searchQuery, setSearchQuery, images, setImages }}>
            {children}
        </ImageContext.Provider>
    )
}

export default ImageContextProvider

export const ImageState = () => {
    return useContext(ImageContext);
};
