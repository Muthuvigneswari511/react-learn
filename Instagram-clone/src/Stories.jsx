import { useEffect, useState } from "react";

const Stories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/story")
            .then((res) => res.json())
            .then((data) => setStories(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="story d-flex">
            {stories.length > 0 ? (
                stories.map((story) => (
                    <div className="mx-1"  key={story.id}>
                        <div className="gradient-border">
                        <img className="story-dp rounded-circle" src={story.profilePic} alt="profile pic" />
                        </div>
                        <p className="text-truncate" style={{width:"50px"}}>{story.username}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Stories;