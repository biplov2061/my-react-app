import React , {useState} from "react";


export default function Textform(props) {
 function handleButton()
 {
  console.log("Uppercased was clicked" + text);
  let new_text = text.toUpperCase();
  document.title = 'Textutils - UpperCase Mode';
  setext(new_text);
  
 }

  const handleOnchange = (event)=>{
    setext(event.target.value);
  }

  const handleButton1 = ()=>{
    let lower = text.toLowerCase();
    document.title = 'Textutils - LowerCase Mode';
    setext(lower);
  }

  const handleButton2 = ()=>{
    let clear = '';
    setext(clear);
  }

  const handleCopy = () =>{
   window.navigator.clipboard.writeText(text);
  
  }

  const [text , setext] = useState('Enter text here');
  return (
    <>
    <div className="container">
      <h1 style={{color : props.textColor === 'white'?'black':'white'}}>{props.heading}</h1>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnchange}
          style={{color:props.textColor === 'black' , backgroundColor :props.textcolor}}
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-3" onClick={handleButton}>Convert to UPPERCASE</button>
      <button type="button" className="btn btn-primary mx-3" onClick={handleButton1}>Convert to lowercase</button>
      <button type="button" className="btn btn-danger  mx-3" onClick={handleButton2}>Clear</button>
      <button type="button" className="btn btn-light" onClick={handleCopy}>Copy To Clipboard</button>
    </div>
         <div className="container my-4">
             <h1 style={{color : props.textColor === 'white'?'black':'white'}}>Your Text Summary</h1>
             <p style={{color :props.textColor ==='white'?'black':'white'}}>{text.split(" ").length} Words , {text.length} Characters</p>
            <p style={{color : props.textColor === 'white'?'black':'white'}}>It will take about {((text.split(" ").length * 1) / 60).toFixed(3)} minutes to read this.</p>
            <h3 style={{color :props.textColor === 'white'?'black':'white'}}>Preview</h3>
            <p style={{color : props.textcolor === 'white'?'black':'white'}}>{text.length>0?text : 'Enter something'}</p>
         </div>
    </>
  );
}
