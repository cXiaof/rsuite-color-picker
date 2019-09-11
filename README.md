# rsuite-color-picker
Package a color picker extension that can select color for rsuite.

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
import ColorPicker from 'rsuite-color-picker';
import 'rsuite-color-picker/lib/styles.less'

const App = () => <ColorPicker />

ReactDOM.render(<App />, mountNode);
```

## Props

| Property         | Type`(Default)`          | Description                          |
| ---------------- | ------------------------ | ------------------------------------ |
| disabled         | boolean`(false)`         | disabled                             |
| value            | String/Object            | value (Controlled)                   |
| defaultValue     | String/Object`(#00bcd4)` | Default value                        |
| onChange         | Function                 | call every time the color is changed |
| onChangeComplete | Function                 | call once a color change is complete |

see detail of 3 props in [`React Color`](https://github.com/casesandberg/react-color/):
1. color (value / defaultValue)
2. onChange (onChange)
3. onChangeComplete (onChangeComplete)

## License

MIT licensed
