import {useState} from "react";

const StateNullPractice=()=>{
    const [user,setUser]=useState(null);
    return (
        <>
        <h1>{user?{user.name}:"No user"}</h1>
        <button onClick={()=>}>Click</button></>

    );
}
export default StateNullPractice;