import './App.css'
import Textform from "./Components/Textform";
import About from "./Components/About";
import Navbar from "./Components/Navbar"
import { useState } from "react";
import Alert from "./Components/Alert";
import React from "react";
import {
  BrowserRouter as Router,
Route,
  Switch,
  Link
} from "react-router-dom";

function App(){
const [mode, setmode] = useState('light');//whether dark mode is enable or not //
const [alert, setalert] = useState(null)

const showalert = (message,type)=>{
  setalert({
msg:message,
type:type
  })
setTimeout(() => {
  setalert (null);
}, 1500);
}

const togglemode = ()=>{
  if (mode ==='light')
  {
  setmode ('dark');
  document.body.style.backgroundColor ='#2d2e4e';
  showalert("dark mode has been enabled","Success");
  document.title ="Textutils - Dark Mode";
}
else
{
  setmode('light');
  document.body.style.backgroundColor ='white';
  showalert("Light mode has been enabled","Success");
  document.title ="Textutils - Light Mode";
}
}
return(

<>
<Router>
 <Navbar title="Texttutils" abouttext = "About" Home="Home" mode={mode}  togglemode={togglemode}/>
 <Alert  alert ={alert}  />
 <div className="container my-3">
 <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
<Textform showalert={showalert}heading="Enter the text to analyze below" mode={mode}/>
            </Route>
        </Switch>
 </div>
 </Router>
</>
);
}
export default App;