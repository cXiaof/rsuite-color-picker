import React, { useState } from 'react'
import ColorPicker from '../src'

const DefaultExample = () => {
    const [value, updateValue] = useState('#87ceeb')
    return (
        <div className='example'>
            <h2>Default</h2>
            <ColorPicker onChange={callback} />
            <hr />
            <h2>Default Value</h2>
            <ColorPicker defaultValue='#ffc0cb' onChange={callback} />
            <hr />
            <h2>Disabled</h2>
            <ColorPicker disabled onChange={callback} />
            <hr />
            <h2>Controlled</h2>
            <ColorPicker
                value={value}
                onChange={(color, event) => {
                    updateValue(color.hex)
                    callback(color, event)
                }}
            />
        </div>
    )
}

const callback = (color, event) => console.log(color, event)

export default DefaultExample
