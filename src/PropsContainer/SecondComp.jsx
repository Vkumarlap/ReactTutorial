import React from "react";

const SecondComp=(props)=>{
    const{name,brand,price}=props.mycar;

    return(
        <div>
         <h1>Car Name: {name}</h1>
            <h1>Brand: {brand}</h1>
            <h1>Price: {price}</h1>
        </div>
    );
}
export default SecondComp;