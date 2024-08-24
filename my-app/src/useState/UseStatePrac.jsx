import React, {useState} from "react";

function UseStatePrac(){
 setInterval(updateTime,1000)
    const now= new Date().toLocaleTimeString()
    const [time, setTime]=useState(now)
    function updateTime(){
        const Newtime=new Date().toLocaleTimeString()
        setTime(Newtime)
    }
    return(
        <div>
            <h1>{time}</h1>
            <button onClick={updateTime}>Time</button>
        </div>
    )
}
export default UseStatePrac;