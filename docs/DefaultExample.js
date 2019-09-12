import React, { useState } from 'react'
import ColorPicker from '../src'

const DefaultExample = () => {
    const [value, updateValue] = useState('#ffc0cb')
    console.log(value)
    return (
        <div className='example'>
            <h2>Default</h2>
            <ColorPicker onChange={callback} />
            <hr />
            <h2>Default Value</h2>
            <ColorPicker
                defaultValue={{ r: 255, g: 215, b: 0 }}
                onChange={callback}
            />
            <hr />
            <h2>Disabled</h2>
            <ColorPicker disabled onChange={callback} />
            <hr />
            <h2>Controlled</h2>
            <ColorPicker
                value={value}
                onChange={(color, event) => {
                    updateValue(color.hsl)
                    callback(color, event)
                }}
            />
        </div>
    )
}

const callback = (color, event) => console.log(color, event)

export default DefaultExample
