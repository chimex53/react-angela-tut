import React, { useState } from "react";

const ComplexState=()=>{
    const [Contact, setContact]=useState({
        Fname: "",
        Lname: "",
        Email: ""
    })
    const getInputs=(names)=>{
     return(e)=>{
        setContact({...Contact,
        [names]:e.target.value})
     }
    }
    return(
        <div>
            <input type="text"  value={Contact.Fname} onChange={getInputs('Fname')} placeholder="firstname"/>
            <input type="text"  value={Contact.Lname} onChange={getInputs('Lname')} placeholder="lastname"/>
            <input type="email"  value={Contact.Email} onChange={getInputs('Email')} placeholder="Email"/>
            <p>Fname: {Contact.Fname} </p>
            <p>Lname {Contact.Lname} </p>
            <h6>Email: {Contact.Email}</h6>
        </div>
    )
}
export default ComplexState;