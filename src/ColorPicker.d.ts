import * as React from 'react'
import * as ReactColor from 'react-color'

export interface ColorPickerProps {
    /**
     * disabled
     */
    disabled?: boolean

    /**
     * value (Controlled)
     */
    value?: ReactColor.Color

    /**
     * Default value
     */
    defaultValue?: ReactColor.Color

    /**
     * call every time the color is changed
     */
    onChange?(value: ReactColor.Color): void

    /**
     * call once a color change is complete
     */
    onChangeComplete?(value: ReactColor.Color): void
}

export default class ColorPicker extends React.Component<
    ColorPickerProps,
    any
> {}
