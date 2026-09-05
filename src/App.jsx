import { useState } from 'react'
import CountThis from './Count.jsx'
import ColorGenerate from './Components/Colour-generator/index.jsx'
import RatingComponent from './Components/Star-rating/index.jsx'
import Slider from './Components/Slider/index.jsx'
import InfiniteScroll from './Components/infinite-scroll/index.jsx'
import './App.css'
import dataRating from './Data/data-rating.js'
import NavTree from './Components/Nav-tree/index.jsx'
import { menus } from './Components/Nav-tree/nav-data.js'
import QRCodeGenerator from './Components/qr-code-generator/index.jsx'
import CustomTheme from './Components/custom-useState/index.jsx'

function App() {

  return (<>

  {/* Custom Theme */}
  <CustomTheme />

  {/* QR Code Generator */}
  <QRCodeGenerator />

    {/* Nav tree UI */}
    <NavTree menus={menus} />

    {/* Picture Slider */}
    <Slider imageRender={dataRating.slice(0, 10)} />

    {/* Star rating component */}
    <RatingComponent ratingData={dataRating} noOfStars={10}/>

    {/* Colour Generator */}
    <ColorGenerate />
    
    {/* Counter */}
    <CountThis />

    {/* Infinite Scroll */}
    <InfiniteScroll />
  </>
  )
}

export default App
