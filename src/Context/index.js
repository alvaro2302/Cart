import { createContext,useState } from "react";
import {lineItems as lineItemsOrigin}from "../index";
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) =>{
    const [SUBTOTAL,setSubTotal] = useState(2094.97);
    const [HST,setHST] = useState(272.3461);
    const [Shipping, setShipping] = useState(0);
    const [TOTAL,setTotal] = useState(2382.3161);
    const [ESTIMATED_DELIVERY,setEstimateDelivery] = useState("Nov 24, 2021");
    const [count, setCount] = useState(3)
    const [lineItems, setLineItems] = useState(lineItemsOrigin)

    return (
        <ShoppingCartContext.Provider value ={{
            count,
            setCount,
            lineItems,
            setLineItems,
            SUBTOTAL,
            setSubTotal,
            HST,
            setHST,
            TOTAL,
            setTotal,
            ESTIMATED_DELIVERY,
            setEstimateDelivery

        }}>
        {children}
        </ShoppingCartContext.Provider>
    ) 
}