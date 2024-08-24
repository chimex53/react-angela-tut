import React, { useState } from "react";

const Input = ()=>{
    const [HeadingText,setHeadingText]=useState("hello");
    const [inputVal,setInputVal]=useState("");


function click(){
 setHeadingText("submitted")
} 

  return(
        <div className="container">
            <h1>{HeadingText}</h1>
            <input
            //ref={inputRef}
            onChange={(e) => setInputVal(e.target.value)}
            type="text" placeholder="username" 
            value={inputVal}
            />
            <button onClick={click}>Submit</button>
        </div>
    );
}
export default Input;