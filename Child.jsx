import React from 'react'
import '../Assets/Count.css'
const Child = (props) => {
    return (
        <div>
            <h1 className='fc'>{props.name} {props.age} {props.occupation}</h1>

        </div>
    )
}

export default Child