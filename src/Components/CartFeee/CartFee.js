import React,{useContext} from "react";
import "./CartFee.css"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { ShoppingCartContext } from "../../Context";

const CartFee = ({SUBTOTAL, HST, TOTAL,Shipping}) => {
    const context = useContext(ShoppingCartContext);
    const {isLoadingItems} = context

 return(
    <div>
        <div className="FeeDetails">
                        <div >
                            <ul >
                                <h3 style={{textAlign:"start"}}>{"Subtotal"}</h3>
                                <h3 style={{textAlign:"start"}}>{"Taxes (estimated)"}</h3>
                                <h3 style={{textAlign:"start"}}>{"Shipping"}</h3>
                                <h3 style={{textAlign:"start"}}>{"Total"}</h3>
                            </ul>
                        </div>
                        <div className="priceDetails">
                            <ul >
                            {isLoadingItems? <Skeleton width={100}/> :<h3>{`$${SUBTOTAL}`}</h3>}
                            {isLoadingItems? <Skeleton width={100}/> :<h3>{`$${HST}`}</h3>}
                            {isLoadingItems? <Skeleton width={100}/> :<h3 className="shipping">{Shipping? `$${Shipping}`: "Free"}</h3>}
                        
                            
                            {isLoadingItems? <Skeleton width={100}/> :<h3>{`$${TOTAL}`}</h3>}
                            </ul>
                        </div>
                    
        </div>
    </div>
    )
}
export default CartFee;