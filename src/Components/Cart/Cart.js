import React,{useContext}from "react";
import ItemProduct from "../ItemProduct/ItemProduct";
import CartFee from "../CartFeee/CartFee";
import { ShoppingCartContext } from "../../Context";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./Cart.css"
const Cart = ({items,SUBTOTAL, HST, TOTAL, ESTIMATED_DELIVERY,Shipping}) =>{
    const defaultLoading = {
        id: 1,
        title: "Grey Sofa",
        price: 499.99,
        quantity: 1,
        image:"https://www.cozey.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0277%2F3057%2F5462%2Fproducts%2F2_Single_shot_DARK_GREY_OFF_OFF_SLOPE_17f0f115-11f8-4a78-b412-e9a2fea4748d.png%3Fv%3D1629310667&w=1920&q=75",
        swatchColor: "#959392",
        swatchTitle: "Grey"
    }
    
    const datesFee = {SUBTOTAL, HST, TOTAL,Shipping}; 
    const context = useContext(ShoppingCartContext); 
    const {setCount,count,setLineItems,lineItems,setIsLoadingFee,isLoadingItems} = context;
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
                    { !isLoadingItems &&( 

                            <div>
                                {   
                                    items.map((item,index)=>(

                                        <ItemProduct key={`item-${index}`} item = {item}/>
                                        
                                    ))
                                }
                            </div>)
                    }
                    {
                        isLoadingItems &&(
                            <div>

                                <ItemProduct key={`item-${0}`} item = {defaultLoading}/>
                                        
                            </div>
                            )
                    }
                    <CartFee {...datesFee}/>

            </div>
    )
}
export default Cart;