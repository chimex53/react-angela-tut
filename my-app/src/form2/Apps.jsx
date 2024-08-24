import React from "react";
import Form from "./Form";

var userIsRegistered =true
function Apps(){
    return <div className="container">
          <Form
          isRegistered={userIsRegistered}
          />
    </div>
}
export default Apps;