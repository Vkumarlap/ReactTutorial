import './App.css'
import FirstComp from './PropsContainer/FirstComp';
import FourthComp from './PropsContainer/FourthComp';
import SecondComp from './PropsContainer/SecondComp';
import StateMng from './StateMng'
import { useState } from 'react';
function App(){

const[select,setSelect]=useState(true);

  const mycar={
    name:"skoda",
    brand:"VW",
      price:2100000
  }

  return (<div className="container">
    {select?<FirstComp name="Car details are not available currently"/>:<SecondComp mycar={mycar}/>}
       <FirstComp name="kumar" /> 
       <SecondComp mycar= {mycar} />  passing object using props
       <StateMng />
       <FourthComp />
  </div>)
}

export default App;