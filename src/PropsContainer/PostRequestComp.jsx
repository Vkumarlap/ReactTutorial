import { useState } from "react";
const PostRequestComp=()=>{

     
const[name,setName]=useState("")
const[desc,setDesc]=useState("")
const[ price,setPrice]=useState(0)
const[ availabilty,setAvailability]=useState(false)
const[ brand,setBrand]=useState("")


const product={name,desc,brand,price,availabilty}

const handler=async(e)=>{
e.preventDefault();
console.log(product);
const response= await fetch("http://localhost:8080/api/product",{
    method:"POST", headers:{"Content-Type":"application/json"},
body: JSON.stringify(product)
});

}



    return(
<div className="form"> 
    <form onSubmit={handler}>
 <label>name</label> <br/>
<input type='text' name="name" onChange={(e)=>setName(e.target.value)}/> <br/>
<label > desc</label>
<input type='text' name="name" onChange={(e)=>setDesc(e.target.value)}/> <br/>
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