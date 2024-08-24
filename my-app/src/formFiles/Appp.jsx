import React from "react";
import Login from "../Login";
var isLogin=true
var name="ugwu chimezie"
function Appp(){
    return (<div className="container">{
       
        isLogin===true ? <h1>hello {name}</h1> : <Login /> 
    }
    </div>
    )
}
export default Appp;