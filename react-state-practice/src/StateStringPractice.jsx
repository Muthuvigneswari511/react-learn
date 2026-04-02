import {useState} from "react";

const StateStringPractice=()=>{
    const [text,setText]=useState("");
    return(
        <>
        <h1>{text}</h1>
        <input type="text" onChange={e=>setText(em=>e.target.value)}></input>
        </>
    );
}

export default StateStringPractice;