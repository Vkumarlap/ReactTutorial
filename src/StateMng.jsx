import { useState,useEffect } from "react";

const StateMng=()=>{

    const [count,setcount]=useState(0);
     const [msg,setmsg]=useState(" ");

useEffect(()=>{
     if(count!=0)
    setmsg("count changed");
},[count]);



return (<div>
<h1>{count}</h1>
<button type='button' onClick={()=>setcount(count+1)} >Click to count++</button>
<h1>{msg}</h1>
</div>);    
}

export default StateMng;