import React, {useState, useEffect} from 'react'

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
    </div>
  )
}
export default Home