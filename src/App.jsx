
import './App.css';
import React from "react"

function App() {
  const[counter,setcounter]=React.useState(0);
    return (
        <div id='parent'>
            <div className="child">
            <h1>{counter}</h1>
            <div className='btn'>
                <button className="btn1" onClick={()=>{setcounter(counter+1)}}>Increment</button>
                <button className="btn2" onClick={()=>{setcounter(counter-1)}}>Decrement</button>
            </div>
            </div>
        </div>
  );
}

export default App;