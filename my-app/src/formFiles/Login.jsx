import React from "react";
import Inpu from './Inpu'
function Login(){
    return <div>
        <form className="form">
        <Inpu 
        type="text"
        placeholder="username"
        />
        <Inpu 
        type="password"
        placeholder="password"
        />
        <button>login</button>
        </form>
    </div>
}
export default Login;