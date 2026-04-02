import {useState} from "react";

const StateBooleanPractice=()=>{
    const [login,setLogin]=useState(false);
    return (
        <>
        <h1>{login?"Welcome User":"please login"}</h1>
       
        <button onClick={()=>setLogin(!login)}>click</button>
        </>
    );
}

export default StateBooleanPractice;