import React, {useState, createRef} from 'react';
import Editor from './components/editor/Editor';
import FormControl from './components/formControl/FormControl';
import './App.css';

function App() {
	const [html, setHTML] = useState('');
	const [undoHTML, setUndoHTML] = useState([]);
  const editorNode = createRef()
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
    let text = '';
		if (window.getSelection) {
      text = window.getSelection()/* .toString(); */
      if(text.rangeCount > 0){
        const textRange = text.getRangeAt(0);
        const selectionStart = textRange.startOffset;
        const selectionEnd = textRange.endOffset;

        if(selectionEnd !== selectionStart){
          console.log(editorNode)
          console.log(text.getRangeAt(0).commonAncestorContainer.parentNode == editorNode);
        }
      }
    }
     else if (document.selection && document.selection.type !== 'Control') {
      text = document.selection.createRange().text;
      console.log(text, "two")
		}
		// return text;
	};

	const styleHtml = style => {
		let newHTML;
		console.log(html);
		if (html.includes(`<${style}>`)) {
			newHTML = html.replace(`<${style}>`, ``).replace(`</${style}>`, ``);
		} else {
			newHTML = `<${style}>${html}</${style}>`;
		}
		setHTML(newHTML);
	};

	return (
		<div className='App' onMouseUp={getSelectionText}>
      random text here
			<FormControl styleHtml={styleHtml} />
			<Editor doneTyping={doneTyping} html={html} getSelectionText={getSelectionText}/>
		</div>
	);
}

export default App;
