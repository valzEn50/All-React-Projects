import { useState } from 'react'
import CountThis from './Count.jsx'
import ColorGenerate from './Components/Colour-generator/index.jsx'
import RatingComponent from './Components/Star-rating/index.jsx'
import './App.css'
import dataRating from './Data/data-rating.js'

function App() {

  return (<>
    {/*<CountThis /> */}
    <RatingComponent ratingData={dataRating} noOfStars={10}/>
    <ColorGenerate />
    <CountThis />
  </>
  )
}

export default App
