import React from 'react';
import './Editor.css';
import ContentEditable from 'react-contenteditable';

const Editor = ({doneTyping, html, contentEditable}) => {
	let typingTimer; //timer identifier
   
	// //on keyup, start the countdown
	const handleChange = (evt) => {
    //     // console.log(evt.target.value)
		clearTimeout(typingTimer);
		typingTimer = setTimeout(() => doneTyping(evt), 2000);
	};


	// //on keydown, clear the countdown
	const handleKeyDown = () => {
		clearTimeout(typingTimer);
	}


	// <span id="cursor"></span>
	return (
		<ContentEditable
			className='editor'
			innerRef={contentEditable}
			html={html} // innerHTML of the editable div
			disabled={false} // use true to disable editing
            // onChange={getText} // handle innerHTML change
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            tagName='div' // Use a custom HTML tag (uses a div by default)
		/>
	);
};

export default Editor;
