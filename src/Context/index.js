import { createContext,useState, useEffect} from "react";
import {lineItemss}from "../index";
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) =>{
    const [SUBTOTAL,setSubTotal] = useState(2094.97);
    const [HST,setHST] = useState(272.3461);
    const [Shipping, setShipping] = useState(0);
    const [TOTAL,setTotal] = useState(2382.3161);
    const [ESTIMATED_DELIVERY,setEstimateDelivery] = useState("Nov 24, 2021");
    const [count, setCount] = useState(3)
    const [lineItems, setLineItems] = useState(lineItemss)
    const [isLoadingFee, setIsLoadingFee] = useState(false)

    useEffect(()=>{
        if(isLoadingFee) {
            calculateFees()
        }
    },[isLoadingFee])
    const calculateFees = () => {
        let subtotal = 0;
        let tax = 0;
        let shipping = 0;
        let total = 0;
        lineItems.forEach((item)=>{
            subtotal = subtotal + item.price;
        })
        tax = subtotal * 0.13;
        shipping = 15;
        total = subtotal + tax + shipping;
        subtotal = Math.ceil(subtotal*100)/100;
        tax = Math.ceil(tax*10000)/10000;
        total = Math.ceil(total*10000)/10000;

        setSubTotal(subtotal)
        setHST(tax);
        setShipping(shipping);
        setTotal(total);
        setIsLoadingFee(false);
    }
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
            setEstimateDelivery,
            setIsLoadingFee,
            setIsLoadingFee

        }}>
        {children}
        </ShoppingCartContext.Provider>
    ) 
}