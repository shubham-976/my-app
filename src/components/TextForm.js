import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('Uppercase was clicked.');
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase.", "Success")
    }
    const handleLowerClick = ()=>{
        // console.log('Lowercase was clicked.');
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase.", "Success")
    }
    const handleClearText = ()=>{
        // console.log('Clear the text.');
        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared.", "Success")
    }
    const handleCopyText = ()=>{
        //console.log('Copy the text.);
        let copiedText = document.getElementById("textBox");
        copiedText.select();
        navigator.clipboard.writeText(copiedText.value);
        props.showAlert("Text Copied.", "Success")
    }
    const handleOnChange = (event)=>{
        // console.log('On change.');
        setText(event.target.value)
    }
    
    const [text, setText] = useState('Enter the text here.');
    // setText("Enter as many text as you want.");
    return (
        <>
        <div className='container' >
            <div className="mb-3">
                <h2 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
        </div>
        <div className="container my-1" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text Summary.</h2>
            <p>The above text contains : {text.split(" ").length} Words and {text.length} Characters</p>
        </div>
        </>
    )
}
