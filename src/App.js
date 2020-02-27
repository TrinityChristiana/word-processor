import React, {useState} from 'react';
import Editor from './components/editor/Editor';
import FormControl from './components/formControl/FormControl';
import './App.css';

function App() {
	const [html, setHTML] = useState({text: ""});
	const [undoHTML, setUndoHTML] = useState( [] );

  
	//user is "finished typing," do something
	const doneTyping = evt => {
    console.log(typeof undoHTML);
    let newArray = undoHTML;
		newArray.push(html.text);

		// if (newArray.length() === 10) {
		// 	console.log('hah');
		// 	setUndoHTML(undoHTML.shift());
		// }

		setUndoHTML(newArray);
		setHTML({text: evt.target.value});
	};

	const styleHtml = style => {
		let newHTML;
		if (html.includes(`<${style}>`)) {
			newHTML = html.replace(`<${style}>`, ``).replace(`</${style}>`, ``);
		} else {
			newHTML = `<${style}>${html}</${style}>`;
		}
		setHTML(newHTML);
	};

	return (
		<div className='App'>
			<FormControl styleHtml={styleHtml} />
			<Editor doneTyping={doneTyping} html={html.text} />
		</div>
	);
}

export default App;
