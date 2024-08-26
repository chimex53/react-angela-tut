import React, { useState } from 'react';

function ControlledInput() {
 const [Inputvalue,setInputvalue]=useState("")

 const HandleEvent=(event)=>{
    setInputvalue(event.target.value)
console.log(event);

 }
 return(
    <div>
        
        <input type="text" value={Inputvalue} onChange={HandleEvent}/>
        <button >submit</button>
        <p>{Inputvalue}</p>
    </div>
 )





}
export default ControlledInput;