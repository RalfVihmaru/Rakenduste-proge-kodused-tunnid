import React, { useState } from "react"

const Greeting = ({ name, age, residency }) => {
  const [info, setInfo] = useState("no info")
  const [loading, setLoading] = useState(false)

  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Info: {info}</h1>
      <h1>Residency: {residency}</h1>
      <h1>Age: {age}</h1>
      <input 
        type="text" 
        onChange={event => setInfo(event.target.value)}
      /><br/>
      <button onClick={() => setLoading(!loading)}>Toggle Loading true/false</button>
      { loading ? 
         <div>
         <p>Loading {name}'s profile...</p>
         <img class="gif" src="https://c.tenor.com/YYbqPqvXHn8AAAAC/funny-dogs-me-so-happy.gif" alt="Success"/>

     </div>
     
     : 
     <div>
        <p>Epic fail {name} The Rock will get you</p>
         <img className="gif" src="https://c.tenor.com/KhkUEwuvu6IAAAAd/dwayne-rock.gif" alt="Epic fail"></img>
     </div>
          
        }
    </>
  )
}

export default Greeting