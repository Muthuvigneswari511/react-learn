import { useState } from "react";
import UserProfile from "./UserProfile";

const App=()=>{
  const [name,setName]=useState("John Doe");
  return(
    <div>
    <UserProfile name={name}/>
    <input type="text" value={name} 
    onChange={(e)=>setName(e.target.value)}/>
        </div>
  );
}
export default App;