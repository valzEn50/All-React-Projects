import { useState, useEffect } from 'react'
import './color.css'
export default function ColorGenerate(){
  const [colorType, setColorType] = useState('hex');
  const [color, setColor] = useState(null);
  function randomGet(target){
    return Math.floor(Math.random()*target)
  }
  
  function generateHexColor(){
    let hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hex = '#'
    for( let i = 0; i < 6; i++){
      hex += hexArray[randomGet(hexArray.length)];
    }
    setColor(hex)
  }
  
  
  function generateRgbColor(){
    let r,g,b;
     r = randomGet(256)
     g = randomGet(256)
     b = randomGet(256)
    
    setColor(`rgb(${r},${g},${b})`)
  }
  
  useEffect(() => (
    colorType === 'hex' ? generateHexColor() : generateRgbColor()
    ), [colorType])
  
  return (<div className="col-gen-container">
    <div class="color-con">
      <div className="display-color" style={{backgroundColor: color || 'black'}}>
        <h1>{
          colorType === 'hex' ? 'HEX Colour' : 'RGB Colour'
        }</h1>
        <h2>{color}</h2>
      </div>
      <div className="color-button-con">
        <button onClick={() => (setColorType('rgb'))} disabled={ colorType === 'rgb' ? true : false }>Get Rgb</button>
        <button onClick={() => (setColorType('hex'))} disabled={ colorType === 'hex' ? true : false }>Get Hex</button>
        <button onClick={() => (colorType === 'hex' ? generateHexColor() : generateRgbColor() )} className='gen-btn'>Generate Random colour</button>
      </div>
    </div>
  </div>)
}