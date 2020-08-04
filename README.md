# rsuite-color-picker

Package a color picker extension that can select color for rsuite.

## Examples

### [DEMO](https://cxiaof.github.io/rsuite-color-picker/assets/index.html)

## Installation

```
npm install rsuite-color-picker --save
```

or

```
yarn add rsuite-color-picker
```

## Usage

```js
import ColorPicker from 'rsuite-color-picker'
import 'rsuite-color-picker/lib/styles.less'
// import 'rsuite-color-picker/lib/styles.css'

const App = () => <ColorPicker />

ReactDOM.render(<App />, mountNode)
```

## Props

| Property         | Type`(Default)`          | Description                                 |
| ---------------- | ------------------------ | ------------------------------------------- |
| disabled         | boolean`(false)`         | disabled                                    |
| value            | String/Object            | value (Controlled)                          |
| defaultValue     | String/Object`(#00bcd4)` | Default value                               |
| disableAlpha     | boolean`(false)`         | Remove alpha slider and options from picker |
| onChange         | Function                 | call every time the color is changed        |
| onChangeComplete | Function                 | call once a color change is complete        |

see detail of 4 props in [`React Color`](http://casesandberg.github.io/react-color/):

1. color (value / defaultValue)
2. disableAlpha (disableAlpha)
3. onChange (onChange)
4. onChangeComplete (onChangeComplete)

## Less variable

-   @color-picker-wrapper-padding: 5px;
-   @color-picker-border-radius: 6px;

## License

MIT licensed
