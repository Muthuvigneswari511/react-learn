import './style.css';


const Course=(props)=>{
    return (
        <div className='course-card'>
            <img src={props.image}/>
        <h3 style={{color:"rgb(225, 245, 133)"}}>{props.name} Full Course</h3>
        <p><del>{props.anotherprice}</del> &nbsp;${props.price}</p>
        <p>Rating : {props.rating}</p>
        <button>Buy now</button>
        </div>
   );
}

export default Course;