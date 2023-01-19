
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react'


function App() {
  const[mode,setmode]= useState('light')

  const[alert,setalert] =useState(null);
    const showAlert=(message,type)=>{
      setalert({
        type:type,
        msg:message
      }
      )
    setTimeout(() => {
      setalert(null)
    }, 1500);
  };

  const toggleMode=()=>{
    if(mode==="light"){
      setmode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert('succeed',"dark mode has been enabled")
    }
  
  
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('succeed','dark mode has been disabled')
    }
  }

  const AnotherMode=()=>{
    if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor= 'green'
    document.body.style.color = 'yellow'
  } 
  else{
    setmode('light')
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  }
}
  
  
  return (
    <>
    <Navbar/>
    <Alert alert={alert}/>
<TextForm AnotherMode={AnotherMode} toggleMode={toggleMode} showAlert={showAlert} />
    </>
  

    
    )}

export default App;
