import React from "react";

const SecondComp=(props)=>{
    const{name,brand,price}=props.mycar;

    return(
        <div className="container">
            <div>passing an Object  props</div>
         <h3>Car Name: {name}</h3>
            <h3>Brand: {brand}</h3>
            <h3>Price: {price}</h3>
        </div>
    );
}
export default SecondComp;