import React,{useContext} from "react";
import "./CartFee.css"


const CartFee = ({SUBTOTAL, HST, TOTAL,Shipping}) => {


 return(
    <div>
        <div className="FeeDetails">
                        <div>
                            <ul>
                                <h3>{"Subtotal"}</h3>
                                <h3>{"Taxes (estimated)"}</h3>
                                <h3>{"Shipping"}</h3>
                                <h3>{"Total"}</h3>
                            </ul>
                        </div>
                        <div className="priceDetails">
                            <ul >
                                <h3>{`$${SUBTOTAL}`}</h3>
                                <h3>{`$${HST}`}</h3>
                                <h3 className="shipping">{Shipping? `$${Shipping}`: "Free"}</h3>
                            
                                
                                <h3>{`$${TOTAL}`}</h3>
                            </ul>
                        </div>
                    
        </div>
    </div>
    )
}
export default CartFee;