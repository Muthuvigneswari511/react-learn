import {useState} from "react";

const StatePractice=()=>{
    const [count,setCount]=useState(0);
    return (
        <>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        </>
    );
}

export default StatePractice;