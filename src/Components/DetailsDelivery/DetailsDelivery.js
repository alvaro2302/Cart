import React,{useContext} from "react";
import "./DetailsDelivery.css";
const DetailsDelivery = ({item}) => {
    const {price} = item

   
    
    return(
        <div className="detailsDelivery ">
            <div>
                <ul>

                    <h4 className="textDelivery">{`$${price}`}</h4>
                    <h4>{"Estimated Delivery Date Dec 2 - Dec 15"}</h4>
                    
                  
                    <button className="textDeliveryRemove" >{"Remove"}</button>
                  
                
                </ul>    
            </div>
        </div>
             
    )
}
export default DetailsDelivery;