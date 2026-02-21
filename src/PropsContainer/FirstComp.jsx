import React from "react";

const FirstComp=(prop)=>{

   

    return(
<div className="container">
    <h1>Passing varible props </h1>
    <h3>name: {prop.name}</h3>
    <h3> Age:  {prop.age}</h3>
</div>
    );

}
export default FirstComp;