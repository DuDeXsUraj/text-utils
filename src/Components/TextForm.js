import React, { useState } from 'react'

export default function TextForm(props) {
const CliCkhere =()=>{
  console.log('it was CliCked' + text)
  let newtext = text.toUpperCase();
  setText(newtext);
  props.showAlert('Converted to uppercase','succeed');
};
const handleClearCliCK =()=>{
  let newtext = ('');
  setText(newtext);
  props.showAlert('text has been cleared','succeed');
}
const HandleLowCliCk =()=>{
 let newtext = text.toLowerCase();
 setText(newtext);
 props.showAlert('Converted to lowercase','succeed');
 

}

const handleOnChange =(event)=>{
  console.log('it was CliCked')
  setText(event.target.value)
}



  const[text,setText] = useState('');
  //text = ('newtext') this is the wrong way to Change the text 
  //setText('newtext') 
  return (
   <> 
<div  className='Container'>
  <div className="mb-3">
    <label for="mybox" className="form-label">Example textarea</label>
    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'yellow':'black'}} id="mybox" value ={text} onChange={handleOnChange} rows="5"></textarea>
    <button className='btn' style={{backgroundColor: props.mode==='dark'?'blue':'lightblue'}} onClick={CliCkhere}>Uppercase</button>
    <button className='btn' style={{backgroundColor: props.mode==='dark'?'blue':'lightblue'}} onClick={HandleLowCliCk}>Lowercase</button>
    <button className='btn' style={{backgroundColor: props.mode==='dark'?'blue':'lightblue'}} onClick={handleClearCliCK}>Clearhandle</button>
  </div>
  <div className='Container ' ></div>
  <h1> Your text summery</h1>
  <p>{text.split(' ').length} words and {text.length} charactors</p>
  <p>{0.008 *  text.split(" ").length} mintunes read</p>
  
  </div>
 </> 
  )
  };
