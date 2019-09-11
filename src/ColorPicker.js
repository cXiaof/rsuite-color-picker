import React, { useState, useEffect, useCallback } from 'react'
import { ChromePicker } from 'react-color'

const baseClass = 'rsuite-color-picker'

const ColorPicker = React.memo((props) => {
    const { disabled, title, value, defaultValue, onChange } = props
    const [color, updateColor] = useState(defaultValue || '#00BCD4')
    const [visible, setVisible] = useState(false)

    const listener = ({ target }) => {
        if (isOut(target)) setVisible(false)
    }

    useEffect(() => {
        document.body.addEventListener('click', listener)
        return () => {
            document.body.removeEventListener('click', listener)
        }
    }, [])

    const currentValue = value || color
    return (
        <div className={`${baseClass}${disabled ? ' disabled' : ''}`}>
            {title && <div className='label-text'>{title}</div>}
            <div
                className={`${baseClass}-review`}
                style={{ backgroundColor: currentValue }}
                onClick={() => {
                    if (!disabled) setVisible((show) => !show)
                }}
            />
            {visible && (
                <div className={`${baseClass}-overlay`}>
                    <ChromePicker
                        color={currentValue}
                        onChange={(current) => {
                            updateColor(current.hex)
                        }}
                        onChangeComplete={(current, e) => {
                            onChange && onChange(current, e)
                            updateColor(current.hex)
                        }}
                    />
                </div>
            )}
        </div>
    )
})

const isOut = (dom) => {
    while (dom && dom.tagName.toUpperCase() !== 'BODY') {
        if (dom.className.includes(baseClass)) return false
        dom = dom.parentNode
    }
    return true
}

export default ColorPicker
