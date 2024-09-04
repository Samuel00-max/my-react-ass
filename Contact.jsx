import React from 'react'
import { useState } from 'react'
import '../Assets/Count.css'
const Contact = () => {
  const [button, setButton] = useState(true)
  const [Input, setInput] = useState({
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    address:'',
  })

  const names = (event) => {
    setInput({
      ...Input,
        [event.target.name]:[event.target.value]
      
    })
  }
  const home=()=>{
    window.location = 'reload'
  }
  return (
    <div className='sav'>
{
  button?
      <div>
      <h1 className='im'>Crearte contact</h1>

        <button className='blu' onClick={() => setButton(false)}>Save</button>
        <input placeholder='First name' className='e' name='firstname' onChange={names} ></input>
        <input placeholder='Last name' className='d' name='lastname' onChange={names} ></input>
        <input placeholder='E-mail' className='c' name='email' onChange={names} ></input>
        <input placeholder='Phone' className='b' name='phone' onChange={names} ></input>
        <input placeholder='Address' className='a'name='address' onChange={names} ></input>
      </div>:null 
} 

{
button?null:
      <div className='cat'>
        
          <div className='lef'>
            <h3>First name : {Input.firstname}</h3>
            <h3>Last name : {Input.lastname}</h3>
            <h3>E-mail :{Input.email}</h3>
            <h3>Address :{Input.address}</h3>
            <button onClick={home}>HOME</button>
            {/* <button onClick={()=>{setButton(false)}}>EDIT</button> */}
          </div>


      </div>
}


       
        
      
    </div>
  )
}

export default Contact