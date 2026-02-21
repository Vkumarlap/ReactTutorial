import './App.css'
import MainPage from './MainPage';
import AsyncComp from './PropsContainer/AsyncComp';
import FirstComp from './PropsContainer/FirstComp';
import FourthComp from './PropsContainer/FourthComp';
import PostRequestComp from './PropsContainer/PostRequestComp';
import SecondComp from './PropsContainer/SecondComp';
import StateMng from './StateMng'
import { useState } from 'react';
function App(){

const[select,setSelect]=useState(false);

  const mycar={
    name:"skoda",
    brand:"VW",
      price:2100000
  }

  return (<div>
    {/* <div className="maincontainer">
    {select?<FirstComp name="Car details are not available currently"/>:<SecondComp mycar={mycar}/>}
       <FirstComp name="kumar" /> 
       <SecondComp mycar= {mycar} />  
       <StateMng />
  
  </div>
  <div><FourthComp /></div>
  <AsyncComp /> */}
  {/* <PostRequestComp/> */}
  <MainPage/>
  <FirstComp name="kumar" age="22" /> 
  <div><FourthComp /></div>
  </div>
)
}

export default App;