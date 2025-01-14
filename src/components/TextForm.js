import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
      // console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
  }
  const handleClearClick = ()=>{
    // console.log("Cleartext was clicked" + text);
    let newText = ' ';
    setText(newText)
}
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy = () =>{
     var text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '))
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style = {{color : props.mode==='dark'?'white':'#2b781b'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor : props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#2b781b'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3"  style = {{color : props.mode==='dark'?'white':'#2b781b'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something above box to preview it here"}</p>
    </div>
    </>
  )
}
