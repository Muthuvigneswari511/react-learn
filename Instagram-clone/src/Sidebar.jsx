import { useNavigate } from "react-router";

const Sidebar=()=>{
    const navigate=useNavigate();
    return(
        <div className="m-3 position-fixed">
        <div className="d-flex flex-column gap-3">
            <img src="./src/assets/text_insta.webp" className="img"/>
            <div><i className="bi bi-house-door-fill"></i>Home</div>
            <div><i className="bi bi-search"></i>Search</div>
            <div><i className="bi bi-compass"></i>Explore</div>
            <div><i className="bi bi-play-btn-fill"></i>Reels</div>
            <div><i className="bi bi-send"></i>Messages</div>
            <div><i className="bi bi-heart"></i>Notifications</div>
            <div><i className="bi bi-plus"></i>Create</div>
            <div onClick={()=>{navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div> 
        </div>
        <div className="position-fixed bottom-0 mb-2 d-flex flex-column gap-3">
            <div><i className="bi bi-threads"></i>Threads</div>
            <div><i className="bi bi-list"></i>More</div>
        </div>
    </div>    
    );
}
export default Sidebar;