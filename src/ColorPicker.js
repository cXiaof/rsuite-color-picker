import React from 'react'

const ColorPicker = (props) => {
    const { disabled, title } = props
    return (
        <div className={`color-picker${disabled ? ' disabled' : ''}`}>
            {title && <div className='label-text'>{title}</div>}
            ColorPicker
        </div>
    )
}

export default ColorPicker
