import React from 'react'
import Child from './Child'
import '../Assets/Count.css'
const Parent = () => {
  return (
    <div className='cerf'>
      <h2>1st Assignment</h2>
      <Child name="SAPA" age={10000} occupation="LOADING" /><br></br>
    </div>
  )
}

export default Parent