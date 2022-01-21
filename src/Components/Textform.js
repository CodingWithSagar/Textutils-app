import React from 'react'
import{ useState } from 'react';

export default function Textform(props){
  const handleupClick=()=>{
   // console.log("Upppercase was clicked" + text);//
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert ("Converted to Uppercase Successfully")
}
  const handleLoClick=()=>{
    //console.log("Upppercase was clicked" + text);//
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert ("Converted to Lowercase Successfully")
}
  const handleClearClick=()=>{
   // console.log("Upppercase was clicked" + text);//
    let newText =('')
    setText(newText);
    props.showalert(" Cleared  Successfully");
}
  const handleCopy=()=>{
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copied Text successfully")
  
}
const handleExtraSpaces = ()=>{
 let  newText = text.split(/[ ]/);
 setText (newText.join(""));
 props.showalert("Removed Extraspaces Successfully")
  
}




const handleOnChange=(event)=>{
console.log("On Change");
setText(event.target.value)
}
const[text,setText] = useState ('');
 return (
       <>
       <div className="container"style={{color:props.mode==='dark'?'white':'black'}} >
          <h1>
{props.heading} 
 </h1>
<div className="mb-3">
<textarea className="form-control"value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} onChange={handleOnChange}  id="mybox"rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2"onClick={handleupClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2"onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2"onClick={handleClearClick}>Cleartext</button>
<button className="btn btn-primary mx-2"onClick={handleCopy}>Copytext</button>
<button className="btn btn-primary mx-2"onClick={handleExtraSpaces}>Remove ExtraSpaces</button>

        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}  >
          <h2>Your text summary </h2>
          <p>{text.split(" ").length} words ,{text.length} characters</p>
          <p>{ 0.008*text.split(" ").length} minutes words</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    );
}
