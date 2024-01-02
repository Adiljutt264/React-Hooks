import React, {useState} from 'react'

const Home = () => {
    const [a, setA] = useState(0);
    const eventHandlerIncrement = ()=>{
        setA(a + 1);
    }
    const eventHandlerDecrement =()=>{
        setA(a-1);
    }
  return (
    <div>
        <button onClick={eventHandlerIncrement}>+</button>
        <p>{a}</p>
        <button onClick={eventHandlerDecrement}>-</button>
    </div>
  )
}
export default Home