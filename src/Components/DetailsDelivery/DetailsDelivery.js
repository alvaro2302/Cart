import React,{useContext} from "react";
import "./DetailsDelivery.css";
import { ShoppingCartContext } from "../../Context";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
const DetailsDelivery = ({item}) => {
    const {price} = item
    const context = useContext(ShoppingCartContext);
    const {lineItems,setLineItems,setIsLoadingFee,isLoadingItems} = context;
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

                   {isLoadingItems? <Skeleton width={100}/> : <h4 className="textDelivery">{`$${price}`}</h4>}
                   {isLoadingItems? <Skeleton width={100}/> : <h4>{"Estimated Delivery Date Dec 2 - Dec 15"}</h4>}
                    
                  
                   {isLoadingItems? <Skeleton width={100}/> :<button onClick={() => removeLineItem(item.id)} className="textDeliveryRemove" >{"Remove"}</button>}
                  
                
                </ul>    
            </div>
        </div>
             
    )
}
export default DetailsDelivery;