import axios from "axios";
import { useEffect, useState } from "react";

const Profile =()=>{
    const [profile,setProfile]=useState(null);

    const [followers,setFollowers]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/profile')
        .then(data=>{setProfile(data.data);
            console.log(data);
            

        })
        .catch((err)=>console.log(err));
        axios.get('https://localhost:3000/followers')
        .then(data=>setFollowers(data))
        .catch(err=>console.log(err))
    },[])
    const handleOnChange=(e)=>{
        setProfile(prev=>(
            {
                ...prev,[e.target.name]:e.target.value
            }
        ))
    }

    const handleUpdate=async()=>{
        axios.put('http://localhost:3000/profile',profile)
        .then(console.log("Updated"))
        .catch((err)=>console.log(err))
    }

    return(
        <div className="m-4">
        {profile ?
            (<div>
                <img className="rounded-circle profile" src={profile.profilePic} alt="profile"/>
                <h5>{profile.username}</h5>
                <input className="form-control my-4" onChange={handleOnChange} type="text" value={profile.username} name="username"/>
                <input className="form-control " onChange={handleOnChange} type="text" name="profilePic" value={profile.profilePic}/>
                <button className="btn btn-primary my-4" onClick={handleUpdate}>Update</button>
                </div>):
                (<div>Loading profile</div>)}
                {followers.length>0 ? (
                    followers.map(follower=>{
                        <div key={follower.id}></div>
                    })
                )
        </div>
    );
}
export default Profile;