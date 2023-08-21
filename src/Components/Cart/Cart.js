import React,{useContext}from "react";
import ItemProduct from "../ItemProduct/ItemProduct";
import CartFee from "../CartFeee/CartFee";
import { ShoppingCartContext } from "../../Context";
import "./Cart.css"
const Cart = ({items,SUBTOTAL, HST, TOTAL, ESTIMATED_DELIVERY,Shipping}) =>{
 
    
    const datesFee = {SUBTOTAL, HST, TOTAL,Shipping}; 
    const context = useContext(ShoppingCartContext); 
    const {setCount,count,setLineItems,lineItems,setIsLoadingFee} = context;
    const lineItemsOrigins = [...lineItems];
    const addItems = () => {
        let newCount = count;
        let newItems = [];
        const lengthDefaultItems =  lineItemsOrigins.length;
        for(let i=0; i<lengthDefaultItems; i++){
            newCount = newCount + 1;
            let item = {...lineItemsOrigins[i]}
            item["id"] = newCount;
            newItems.push(item);
        }
        setCount(newCount);
        console.log(newItems)
        setLineItems(lineItems.concat(newItems));
        setIsLoadingFee(true);
    }
    return (
            
            <div >
                <h1> You Cart</h1>
              
                    <button style={{margin:"1% 1% 1% 1%"}} onClick={ addItems}>
                        <h2>Add</h2>
                    </button>
                    <div>
                        {   
                            items.map((item,index)=>(

                                <ItemProduct key={`item-${index}`} item = {item}/>
                                
                            ))
                        }
                    </div>
               
                    <CartFee {...datesFee}/>

            </div>
    )
}
export default Cart;