import React from "react";

const FirstComp=(prop)=>{

   

    return(
<div className="container">
    <h1>Passing varible props </h1>
    <h3>{prop.name}</h3>
</div>

    );

}
export default FirstComp;