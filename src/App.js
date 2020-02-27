import React, {useState, useEffect} from 'react';
import Editor from './components/editor/Editor';
import FormControl from './components/formControl/FormControl';
import './App.css';

const App = () => {
	const [html, setHTML] = useState('');
	const [undoHTML, setUndoHTML] = useState([]);
	const [highRange, setHighRange] = useState();

	const contentEditable = React.createRef();

	const getCaretCharacterOffsetWithin = elem => {
		while (el.parentNode) {
      el = el.parentNode;
      console.log(el.parentNode)
			if (el.tagName === div) return el;
		}
		return null;
	};

	// useEffect(() => {
	// 	if (highRange !== undefined) {
	// 		let sel = window.getSelection();
	// 		sel.removeAllRanges(); //remove all ranges from selection
	// 		sel.addRange(highRange); //add Range to a Selection.
	//   }

	// }, [highRange]);

	const doneTyping = evt => {
		let newArray = undoHTML;

		newArray.push(html);

		// Keeps undoHTML array from holding al ot of information

		if (undoHTML.length === 10) {
			undoHTML.shift();
		}

		setUndoHTML(newArray);
		setHTML(evt.target.value);
	};

	const getSelectionText = () => {
		getCaretCharacterOffsetWithin(contentEditable.current);
		// console.log('changed it');
		// if (window.getSelection().toString() !== '') {
		// 	setHighRange(window.getSelection().getRangeAt(0));
		// }
	};

	const styleHtml = style => {
		document.execCommand(style, true);
	};

	return (
		<div className='App' onMouseUp={getSelectionText}>
			random text here
			<FormControl styleHtml={styleHtml} />
			<Editor
				doneTyping={doneTyping}
				html={html}
				contentEditable={contentEditable}
			/>
		</div>
	);
};

export default App;

// TODO: Work on keeping text selected
// TODO: Fix delay on updating html
