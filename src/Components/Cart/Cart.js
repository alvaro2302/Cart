import React from "react";
import ItemProduct from "../ItemProduct/ItemProduct";
import CartFee from "../CartFeee/CartFee";
import "./Cart.css"
const Cart = ({items,SUBTOTAL, HST, TOTAL, ESTIMATED_DELIVERY,Shipping}) =>{
 
    
    const datesFee = {SUBTOTAL, HST, TOTAL,Shipping};  
 
    return (
            
            <div >
                <h1> You Cart</h1>
              
              
                    <div>
                        {   
                            items.map((item,index)=>(

                                <ItemProduct key={`item-${index}`} item = {item}/>
                                
                            ))
                        }
                    </div>
               
            

            </div>
    )
}
export default Cart;