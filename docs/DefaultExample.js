import React, { useState } from 'react'
import {
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    HelpBlock,
    Toggle,
    Button,
    Modal,
} from 'rsuite'
import ColorPicker from '../src'

const DefaultExample = () => {
    const [value, updateValue] = useState('#ffc0cb')
    const [modalShow, setModalShow] = useState(false)
    const closeModal = () => setModalShow(false)
    return (
        <div className='example'>
            <h4>Default</h4>
            <ColorPicker onChange={console.log} />
            <hr />
            <h4>Default Value & Disable Alpha</h4>
            <ColorPicker
                disableAlpha
                defaultValue={{ r: 255, g: 215, b: 0 }}
                onChange={console.log}
            />
            <hr />
            <h4>Disabled</h4>
            <ColorPicker disabled onChange={console.log} />
            <hr />
            <h4>Controlled</h4>
            <ColorPicker
                value={value}
                onChange={(color, event) => {
                    updateValue(color.hsl)
                    console.log(color, event)
                }}
            />
            <hr />
            <h4>In Form (fluid)</h4>
            {getExampleForm('In Form', { fluid: true })}
            <hr />
            <h4>In Form In Modal</h4>
            <div>
                <Modal show={modalShow} onHide={closeModal}>
                    <Modal.Header>
                        <Modal.Title>{`Color Picker (layout: horizontal)`}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {getExampleForm('In Form In Modal', {
                            layout: 'horizontal',
                        })}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={closeModal} appearance='primary'>
                            Confirm
                        </Button>
                        <Button onClick={closeModal} appearance='subtle'>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Button onClick={() => setModalShow(true)}>Open Modal</Button>
            </div>
        </div>
    )
}

const getExampleForm = (instance, props) => {
    const formProps = { onChange: console.log, ...props }
    return (
        <Form {...formProps}>
            <FormGroup>
                <ControlLabel>Input</ControlLabel>
                <FormControl name='Input' />
            </FormGroup>
            <FormGroup>
                <ControlLabel>ColorPicker</ControlLabel>
                <FormControl name='ColorPicker' accepter={ColorPicker} />
                <HelpBlock>{`ColorPicker ${instance} HelpBlock`}</HelpBlock>
            </FormGroup>
            <FormGroup>
                <ControlLabel>Toggle</ControlLabel>
                <FormControl name='Toggle' accepter={Toggle} />
            </FormGroup>
        </Form>
    )
}

export default DefaultExample
