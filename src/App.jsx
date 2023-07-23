import React from 'react'
import Home from './components/home'
import ImageContextProvider from './components/context/imageContext'
const App = () => {
  return (

    <ImageContextProvider>
      <Home />
    </ImageContextProvider>
  )
}

export default App
