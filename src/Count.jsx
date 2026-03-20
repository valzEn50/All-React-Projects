import React, { useState } from 'react'

function CountThis(){
  let [count, setCount] = useState(0);
  
  const decrease = () => {
    setCount(prevCount => (prevCount === 0 ? prevCount - 0 : prevCount - 1))
  }
  function increase(){
    setCount(prevCount => prevCount + 1)
  }
  function reset(){
    setCount(0)
  }
  
  return (
    <>
      <div class="count-container">
        <h1>{count}</h1>
        <div class="buttons">
          <button onClick={decrease}>Decrease</button>
          <button onClick={increase}>Increase</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
      )
}
export default CountThis