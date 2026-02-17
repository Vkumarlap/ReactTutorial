const FourthComp=()=>{

    let arr=[12,{name:'kumar from arr obj',rollno:11},{name:'meoww from arr obj',rollno:12} ,"string"]
return( <div className="5container">
   <div className="fcont">{arr.map((item,index)=>{
    if(typeof item==="object"){
     return(<div  style={{border: "2px solid white" }} key={index}>
        <h1>my name is {item.name}</h1>
        <h2>{item.rollno}</h2>
       
        </div>
     );}
     return(
        <div  style={{border: "2px solid white" }} key={index}>{item}</div>
     );
 
    })}</div>
    
    </div>
    
    )
}
export default FourthComp;