import React from 'react'
import { useState } from "react";
import '../Assets/Count.css'
function Assignment() {
const [Second, setSecond] = useState(0)
function changeValue() {
  setSecond(Second + 1)
}
function Value() {
  if (Second > 0) {
    setSecond(Second - 1)
  }
}
return (
  <div className='sign'>
    <h1 className='hh1'>Counter</h1>
    <div className='section'>
      <button onClick={changeValue}>ADD</button>
      <p style={{fontSize:'60px'}}> {Second}</p>
      <button onClick={Value}>SUBSTRACT</button>
      </div>
  </div>
)
}
export default Assignment