import React from 'react'
import ColorPicker from '../src'

const DefaultExample = () => {
    return (
        <div className='example'>
            <h2>Default</h2>
            <ColorPicker onChange={handleChange} />
            <hr />
            <h2>Disabled</h2>
            <ColorPicker disabled />
        </div>
    )
}

const handleChange = (color, event) => {
    console.log(color, event)
}

export default DefaultExample
