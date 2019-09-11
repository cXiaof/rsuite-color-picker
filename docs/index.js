import React from 'react'
import ReactDOM from 'react-dom'

import './styles.less'
import DefaultExample from './DefaultExample'

const App = () => (
    <div className='page'>
        <h1>ColorPicker</h1>
        <p>
            Package a color picker extension that can select color for rsuite.
        </p>
        <p>
            <a href='https://github.com/cXiaof/rsuite-color-picker'>
                https://github.com/cXiaof/rsuite-color-picker
            </a>
        </p>
        <hr />
        <DefaultExample />
    </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
