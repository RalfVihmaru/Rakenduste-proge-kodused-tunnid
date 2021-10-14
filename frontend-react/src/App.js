import { useState } from "react"
import './App.css';
import Fun from './components/Fun';
import Greeting from './components/Greeting';

function App() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      { show && <h1>{ magicNumber }</h1> }
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber}
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={5}
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={25}
        show={show}
        setShow={setShow}
      />
      <Greeting name={"Pets"} residency={"Eesti"} age={"25"}/>
      <Greeting name={"Mati"} residency={"Venemaa"} age={"-15"}/>
      <Greeting name={"Kati"} residency={"Hiina"} age={"69"}/>
      <Greeting name={"Mari"} residency={"Läti"} age={"42"}/>
     
    </div>
  );
}

export default App;
