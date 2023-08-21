import React from "react";
import ItemProducDetails from "../ItemProductDetails/ItemProductDetails"
import DetailsDelivery from "../DetailsDelivery/DetailsDelivery";

const ItemProduct = ({item}) => {
    return (
        <div className = "items">
            
           <ItemProducDetails item= {item}/>
                       
           <DetailsDelivery item ={item}/>
                                   
                                   
    </div>
    )
}
export default ItemProduct;