import { useState } from "react";
import { useEffect } from "react";  //api fetch,Timer,Event listener
                                    //state change tracking,local storage,
                                    //cleanup work

const UseEffect=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/")
        .then(res=>res.json())
        .then(data=>setData(data))
},[]);
const sendData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",   
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Muthu",
        body: "Hello World",
        userId: 1
      })
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
    return (
        <>
        {data.map((item,index)=>(
        <p key={index}>{item.title}</p>
        ))}
        <button onClick={sendData}>Send Data</button>
        </>
    );
}
export default UseEffect;
