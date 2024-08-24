import React, {useState} from "react";

function Index(){
let [count, setCount]=useState(0)
function increase(){
    setCount(count++)
}

function Decrease(){
    setCount(count--)
}
    return(
      <div>
          <h1>{count}</h1>
          <button onClick={increase}>+</button>
          <button onClick={Decrease}>-</button>
      </div>
    ); 
}
export default Index