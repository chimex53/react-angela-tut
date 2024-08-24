import React from "react";
import cars from './index'

const Practice = () => {

const [toyota,Honda]=cars;  

const {speedSta:{ TopSpeed:ToyotaTopSpeed}}=toyota
const {speedSta:{ TopSpeed:HondaTopSpeed}}=Honda
const {colourBypopularty} = toyota;
const [toyCol1, toyCol2]= colourBypopularty

return (
        <div>
            <table>
                <tr>
                    <th>Brands</th>
                    <th>top speed</th>
                    <th>Top colour</th>
                </tr>
                <tr> 
                    <td>{toyota.model}</td>
                    <td>{ToyotaTopSpeed}</td>
                    <td>{toyCol2}</td>
                </tr>

                <tr>
                     <td>{Honda.model}</td>
                    <td>{HondaTopSpeed}</td>
                    <td>{Honda.Topcolour}</td>
                </tr> 
            </table>
        </div>
    )

}

export default Practice