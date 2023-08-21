import React, {useContext} from "react";
import "./ItemProductDetails.css";

const ItemProductDetails = ({item}) => {
   
    const {swatchTitle, title,swatchColor,image} = item;
    return (
        <div style={{alignSelf:"start", width:"100vh",display: "flex",flexDirection:"row"}}>
               
                <img src={image} width={"200vh"} alt=" Product" />
                <div className="details" >
                        <h2>{`${swatchTitle}/${title}/3`}</h2>
                        <div className="texture">
                            
                             <div className="circle" style={{backgroundColor:`${swatchColor}`}}> </div>
                            
                            
                            <h3>{swatchTitle}</h3>
                        </div>
                                           
                </div>
        </div>
    )
}
export default ItemProductDetails;