import React from "react";


function Form(props){
    return(
        <form className="form" name="form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
           {props.isRegistered==true &&  <input type="password" placeholder="confirm-password" /> }
            <button>{props.isRegistered ? "Login" : "Register"}</button>
        </form>
    )
}
export default Form;