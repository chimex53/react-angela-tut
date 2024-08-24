import React from "react";

function strike(){
    document.getElementById('root').style.textDecoration='line-through'
}
function unstrike(){
    document.getElementById('root').style.textDecoration= null
}

function Ap(){
    return <div>
        <p>buy milk</p>
        <button onClick={strike}>strike</button>
        <button onClick={unstrike}>unstrike</button>
    </div>
}
export default Ap