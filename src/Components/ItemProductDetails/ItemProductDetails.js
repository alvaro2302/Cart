import React, {useContext} from "react";
import "./ItemProductDetails.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { ShoppingCartContext } from "../../Context";
import "react-loading-skeleton/dist/skeleton.css";
const ItemProductDetails = ({item}) => {
    const context = useContext(ShoppingCartContext);
    const {isLoadingItems} = context;
    const {swatchTitle, title,swatchColor,image} = item;
    return (
        <div style={{alignSelf:"start", width:"100vh",display: "flex",flexDirection:"row"}}>
               {
                isLoadingItems && (
                    <Skeleton
                    
                        height={"50%"}
                        containerClassName="skeletonImage"
                    />
                )
               }
                <img src={image} width={"200vh"} style={{display: isLoadingItems? 'none' : undefined}} alt=" Product" />
                <div className="details" >
                    { isLoadingItems ? <Skeleton width={250} /> : <h2>{`${swatchTitle}/${title}/3`}</h2>}
                        <div className="texture">
                            { isLoadingItems? <Skeleton  
                                                circle
                                                height={"20%"}
                                                containerClassName="avatar-skeleton"/> :
                               <div className="circle" style={{backgroundColor:`${swatchColor}`}}> </div>
                            }
                            
                            { isLoadingItems ? <Skeleton width={30} /> :<h3>{swatchTitle}</h3>}
                        </div>
                                           
                </div>
        </div>
    )
}
export default ItemProductDetails;