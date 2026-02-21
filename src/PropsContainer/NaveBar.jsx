import { useState } from "react";
import PostRequestComp from "./PostRequestComp"
import StateMng from "../StateMng";

const NaveBar=({setPage})=>{





return(

<div className="Navbar">
 <button onClick={()=>setPage("add")}>add Product</button> 
  <button onClick={()=>setPage("home")}>Home</button>

<button onClick={()=>setPage("state")}> StateManagement</button>



</div>

)


}
export default NaveBar;