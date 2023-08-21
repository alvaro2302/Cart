import React, { useEffect, useState,useContext } from "react";
import { ShoppingCartContext } from "../../Context";

import "./CodePostal.css";
const CodePostal = () => {
    const [codePostal, setCodePostal] = useState("");
    const context = useContext(ShoppingCartContext);
    const {lineItems,getEstimatedDelivery} = context;
    const applyCodeCoupon = () =>{
        console.log("apply code ")
        getEstimatedDelivery(codePostal);
        
    }
    return (
       
            <label className="postal">Code postal
                <input 
                    type="text"
                    className="applyButton"
                    value={codePostal} 
                    onChange={e => setCodePostal(e.target.value)}
                />
                <button onClick={(event)=>applyCodeCoupon(event)} className="applyButton" >{"apply"}</button>
            </label>
        
    )
}
export default CodePostal;