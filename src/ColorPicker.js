import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react'
import { ChromePicker } from 'react-color'

const baseClass = 'rsuite-color-picker'

const ColorPicker = React.memo((props) => {
    const {
        title,
        disabled,
        value,
        defaultValue,
        disableAlpha,
        onChange,
        onChangeComplete,
    } = props
    const ref = useRef(null)

    const [color, updateColor] = useState(defaultValue || '#00BCD4')
    const [visible, setVisible] = useState(false)

    const currentValue = useMemo(() => value || color, [color, value])

    useEffect(() => {
        const handler = (e) => {
            const { current: el } = ref
            el && !el.contains(e.target) && setVisible(false)
        }
        document.addEventListener('click', handler)
        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])

    const handleClick = useCallback(() => {
        if (!disabled) setVisible((show) => !show)
    }, [disabled])

    const handleChange = useCallback(
        (current, e) => {
            updateColor(current.hex)
            onChange && onChange(current, e)
        },
        [onChange]
    )
    const handleChangeComplete = useCallback(
        (current, e) => {
            updateColor(current.hex)
            onChangeComplete && onChangeComplete(current, e)
        },
        [onChangeComplete]
    )

    return (
        <div ref={ref} className={`${baseClass}${disabled ? ' disabled' : ''}`}>
            {title && <div className='label-text'>{title}</div>}
            <div
                className={`${baseClass}-review`}
                style={{ backgroundColor: getBgColor(currentValue) }}
                onClick={handleClick}
            />
            {visible && (
                <div className={`${baseClass}-overlay`}>
                    <ChromePicker
                        color={currentValue}
                        disableAlpha={disableAlpha}
                        onChange={handleChange}
                        onChangeComplete={handleChangeComplete}
                    />
                </div>
            )}
        </div>
    )
})

const getBgColor = (color) => {
    if (!color || typeof color === 'string') return color
    const defaultEnd = '1)'
    if (notUndefined(color.r)) {
        const { r, g, b, a } = color
        let result = `rgba(${parse(r)}, ${parse(g)}, ${parse(b)}, `
        result += notUndefined(a) ? `${parse(a)})` : defaultEnd
        return result
    }
    if (notUndefined(color.h)) {
        const { h, s, l, a } = color
        let result = `hsla(${parse(h)}, ${parse(s, 100)}%, ${parse(l, 100)}%, `
        result += notUndefined(a) ? `${parse(a)})` : defaultEnd
        return result
    }
}

const notUndefined = (attr) => attr !== undefined
const parse = (attr, times = 1) => parseInt(attr * times, 0) || 0

export default ColorPicker
