import React, {useState} from 'react';
import Editor from './components/editor/Editor';
import FormControl from './components/formControl/FormControl';
import './App.css';

function App() {
	const [html, setHTML] = useState('');
  const [undoHTML, setUndoHTML] = useState([]);
  
	//user is "finished typing," do something
	const doneTyping = evt => {
		const newArray = undoHTML;
		newArray.push(html);
		setUndoHTML(newArray);
		setHTML(evt.target.value);
  };

  const styleHtml = style => {
    
  }
  
	return (
		<div className='App'>
			<FormControl />
			<Editor doneTyping={doneTyping} html={html}/>
		</div>
	);
}

export default App;
