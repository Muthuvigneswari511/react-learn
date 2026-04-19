import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ViewStory=()=>{
    const {id}=useParams();

    const [story,setStory]=useState(null);

    useEffect(()=>{
        fetch(`http://localhost:3000/story/${id}`)
        .then(data=>data.json())
        .then(res=>setStory(res))
        .catch(err=>console.log(err))
    },[id]);
    return(
        <div>
        {story?
        <div>
            <img src={story.image} alt="story"/>
        </div>
        :<div>Loading</div>}
        </div>
    );
}
export default ViewStory;