import React from "react";
import "./Editor.css"
import { Icon } from 'semantic-ui-react'

const Editor = props => {
    return (
        <div className="editor">
            THESE ARE words <span id="cursor">|</span>these words
        </div>
    )
}

export default Editor;