import React, {useState, useEffect, useContext, useRef} from 'react';
import { Context } from './index';

const Row = () => {
    const data = useContext(Context);
    const customElement = useRef(null);
    useEffect(()=>{
        console.log(customElement.current);
    })
  return (
    <div ref={customElement}>{data}</div>
  )
}

const Home = () => {
    const [a, setA] = useState(0);
    useEffect(()=>{
        console.log("Showing Effect")
    },[a])
  return (
    <div>
        <button onClick={()=> setA(a + 1)}>+</button>
        <p>{a}</p>
        <button onClick={()=> setA(a-1)}>-</button>
        <Row/>
    </div>
  )
}
export default Home