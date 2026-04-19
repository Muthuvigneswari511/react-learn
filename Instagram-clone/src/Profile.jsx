import axios from "axios";
import { useEffect, useState } from "react";

const Profile =()=>{
    const [profile,setProfile]=useState(null);

    const [followers,setFollowers]=useState([]);

    const [unfollowed,setUnfollowed]=useState(0);

    useEffect(()=>{
        axios.get('http://localhost:3000/profile')
        .then(data=>setProfile(data.data)
            )
        .catch((err)=>console.log(err));
        axios.get('http://localhost:3000/followers')
        .then(data=>setFollowers(data.data) )
        .catch(err=>console.log(err))
    },[unfollowed])
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
    const handleUnfollow=async(id)=>{
        axios.delete(`http://localhost:3000/followers/${id}`)
        .then(alert("Unfollowed"))
        .then(setUnfollowed(!unfollowed))
        .catch(err=>console.log(err))
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
                    followers.map(follower=>(
                        <div key={follower.id} className="d-flex align-items-center gap-3 my-2">
                            {follower.username}
                            <button className="btn btn-secondary btn-gray rounded" onClick={()=>{handleUnfollow(follower.id)}}>unfollow</button>
                        </div>
                    ))
                ):(
                    <div>Loading followers</div>
                )}
      </div>
    );
}
export default Profile;