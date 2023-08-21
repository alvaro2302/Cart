import React, { useContext } from "react";
import Cart from "../../Components/Cart/Cart";
import { ShoppingCartContext } from "../../Context";
const Home = () => {
    const context = useContext(ShoppingCartContext);
    const {lineItems,SUBTOTAL, HST,TOTAL, ESTIMATED_DELIVERY,Shipping} = context;
    const feeDates = {SUBTOTAL, HST,TOTAL, ESTIMATED_DELIVERY,Shipping};
    return (
     
        <div className="App">
        
          <Cart items ={lineItems} {...feeDates}/>
        </div>

    )
  
    
}
export default Home;