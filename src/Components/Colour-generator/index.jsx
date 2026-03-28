import { useState, useEffect } from 'react'
import './color.css'
export default function ColorGenerate(){
  const [colorType, setColorType] = useState('hex');
  const [color, setColor] = useState(null);
  const [value, setValue] = useState(100)
  const [r, setR] = useState(randomGet(256))
  const [g, setG] = useState(randomGet(256))
  const [b, setB] = useState(randomGet(256))
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
     setR(randomGet(256))
     setG(randomGet(256))
     setB(randomGet(256))
    
    setColor(`rgb(${r},${g},${b})`)
  }

  function handleOpacityChange(e){
    setValue(e.target.value)
  }
  
  useEffect(() => (
    colorType === 'hex' ? generateHexColor() : generateRgbColor()
    ), [colorType])

    useEffect(() => {
      colorType !== 'hex' && setColor(`rgba(${r},${g},${b},${value/100})`)
    }, [value])

    function handleHexOpacity(){
      let hexOpcity = Math.round(value/100*255).toString(16);
    }

  
  return (<div className="col-gen-container">
    <div className="color-con">
      <div className="display-color" style={{backgroundColor: color || 'black'}}>
        <h1>{
          colorType === 'hex' ? 'HEX Colour' : 'RGB Colour'
        }</h1>
        <h2>{color}</h2>
      </div>
      <div className="control-con">
        <div className="opacity-con">
          <input type="range" min={0} max={100} value={value} onChange={handleOpacityChange} className='opacity'/>
          <div className="opacity-value">{value}</div>
        </div>
        <div className="color-button-con">
          <button onClick={() => (setColorType('rgb'))} disabled={ colorType === 'rgb' ? true : false }>Get Rgb</button>
          <button onClick={() => (setColorType('hex'))} disabled={ colorType === 'hex' ? true : false }>Get Hex</button>
          <button onClick={() => (colorType === 'hex' ? generateHexColor() : generateRgbColor() )} className='gen-btn'>Generate Random colour</button>
        </div>
      </div>
    </div>
  </div>)
}