import React,{useContext} from "react";
import "./DetailsDelivery.css";
import { ShoppingCartContext } from "../../Context";
const DetailsDelivery = ({item}) => {
    const {price} = item
    const context = useContext(ShoppingCartContext);
    const {lineItems,setLineItems,setIsLoadingFee} = context;
    const removeLineItem = (lineItemId) =>{
        const newLineItems = lineItems.filter((lineItem)=>{
            if (lineItem.id != lineItemId)
            {
                return item;
            }
        })
        setLineItems(newLineItems);
        setIsLoadingFee(true);
    }
   
    
    return(
        <div className="detailsDelivery ">
            <div>
                <ul>

                    <h4 className="textDelivery">{`$${price}`}</h4>
                    <h4>{"Estimated Delivery Date Dec 2 - Dec 15"}</h4>
                    
                  
                    <button onClick={() => removeLineItem(item.id)} className="textDeliveryRemove" >{"Remove"}</button>
                  
                
                </ul>    
            </div>
        </div>
             
    )
}
export default DetailsDelivery;