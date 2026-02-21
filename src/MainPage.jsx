import { useState } from "react";
import AsyncComp from "./PropsContainer/AsyncComp";
import NaveBar from "./PropsContainer/NaveBar"
import PostRequestComp from "./PropsContainer/PostRequestComp";
import StateMng from "./StateMng";

const MainPage=()=>{

const[page,setPage]=useState("home")

return(
<div>
<NaveBar setPage={setPage}/>
{console.log(page)}
{page==="add"&& <PostRequestComp/>}
{page==="state"&& <StateMng/>}
{page==="home"&&<AsyncComp/>}






</div>


)


}

export default MainPage;