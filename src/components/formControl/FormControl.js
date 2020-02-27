import React from "react"
import "./FormControl.css"
import { Button } from 'semantic-ui-react'

const FormControl = props => {

    const {styleHtml} = props;

    const handleClick = (action) => {
        console.log(action)
    }

    return (
        <div className="form-control">
            <Button id="print" onClick={() => window.print()} icon="print" content="Print" />
            <Button id="bold" onClick={() => styleHtml("b")} icon="bold" content="Bold" />
            <Button id="italics" onClick={() => styleHtml("em")} icon="italic" content="Italic" />
            <Button id="strike" onClick={() => styleHtml("del")} icon="strikethrough" content="Strikethrough" />
            <Button id="undo" onClick={() => handleClick("undo")} icon="undo" content="Undo" />
            <Button id="redo" onClick={() => handleClick("redo")} icon="redo" content="Redo" />
        </div>
    )
}

export default FormControl;