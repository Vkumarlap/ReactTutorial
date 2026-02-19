import { useState } from "react";
const PostRequestComp=()=>{

     
const[name,setName]=useState("")
const[description,setDescription]=useState("")
const[ price,setPrice]=useState("")
const[ availabilty,setAvailability]=useState("")
const[ brand,setBrand]=useState("")


const product={name,description,price,availabilty,brand}

const handler=async(e)=>{
e.preventDefault();
console.log(product);
const response= await fetch("localhost:8080/api/product ",{
    method:"POST", headers:{"content-Type":"Application/json"}
})

}



    return(
<div className="form"> 
    <form onSubmit={handler}>
 <label>name</label> <br/>
<input type='text' name="name" onChange={(e)=>setName(e.target.value)}/> <br/>
<label > desc</label>
<input type='text' name="name" onChange={(e)=>setDescription(e.target.value)}/> <br/>
<label > price</label>

<input type='text' name="name" onChange={(e)=>setPrice(e.target.value)}/>
 <br/>
<label >brand </label>

<input type='text' name="name" onChange={(e)=>setBrand(e.target.value)}/> <br/>
<label >availabbitly </label>

<input type='text' name="name" onChange={(e)=>setAvailability(e.target.value)}/> <br/>


<button type="submit">Submit</button>
</form>
</div>


    );

}

export default PostRequestComp;