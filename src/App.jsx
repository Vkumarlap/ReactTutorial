import './App.css'
import FirstComp from './PropsContainer/FirstComp';
import SecondComp from './PropsContainer/SecondComp';
function App(){

  const mycar={
    name:"skoda",
    brand:"VW",
      price:2100000
  }

  return (<div className="container">
       <FirstComp name="kumar" /> 
       <SecondComp mycar= {mycar} />  {/*passing object using props */}

  </div>)
}

export default App;