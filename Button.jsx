import React from 'react'
import '../Assets/Assignment.css'
import { useState } from 'react'
import '../Assets/Count.css'

const Button = () => {
    const [button, setButton] = useState(false)
    const [button2, setButton2] = useState(false)
    const home=()=>{
        window.location = 'reload'
      }
    return (
        <div className='container'>
            {
                button ? null :
                    button2 ? null :
                        <div className='bert'>
                            <h1  className='hg1'>Are you Registered</h1>
                            <button onClick={() => setButton(true)} className=''>True</button>
                            <button onClick={() => setButton2(true)} className=''>False</button>
                        </div>
            }
            {
                button ?
                    <div className='lef'>
                        <h1 >Log in to your account</h1>
                        <div className='log'>

                            <input placeholder='Enter your name'></input>
                            <input placeholder='Password'></input>
                            <button className='in'>Log in </button>
                            <button onClick={home}>BACK</button>
                        </div>
                    </div> : null
            }
            {
                button2 ?
                    <div className='lap'>
                        <div>
                            <h1> Sign up</h1>
                            <input placeholder='Enter your fullname'></input>
                            <input placeholder='Enter your username'></input>
                            <input placeholder='Enter your email'></input>
                            <input placeholder='Create password'></input>
                            <input placeholder='Confirm password'></input>
                            <button className='ser'> Sign up</button>
                            <button onClick={home}>BACK</button>
                        </div>
                    </div> : null
            }
        </div>
    )
}

export default Button