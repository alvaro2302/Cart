import React,{useContext} from "react";
import "./CartFee.css"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { ShoppingCartContext } from "../../Context";
import CodePostal from "../CodePostal/CodePostal";
const CartFee = ({SUBTOTAL, HST, TOTAL,Shipping}) => {

    const context = useContext(ShoppingCartContext);
    const {isLoadingItems} = context;
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
                            {isLoadingItems? <Skeleton width={100}/> :<h3>{`$${SUBTOTAL}`}</h3>}
                            {isLoadingItems? <Skeleton width={100}/> :<h3>{`$${HST}`}</h3>}
                            {isLoadingItems? <Skeleton width={100}/> :<h3 className="shipping">{Shipping? `$${Shipping}`: "Free"}</h3>}
                        
                            
                            {isLoadingItems? <Skeleton width={100}/> :<h3>{`$${TOTAL}`}</h3>}
                        </ul>
                    </div>
                   
    </div>
     <CodePostal/>
    </div>
    )
}
export default CartFee;