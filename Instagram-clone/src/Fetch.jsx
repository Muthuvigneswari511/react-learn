import { useEffect, useState } from "react";
import Course from "./Course";

const Fetch=()=>{
    const [courses,setCourse]=useState(null);
    useEffect(()=>{
        fetch('http://localhost:3000/courses')
        .then(response =>response.json())
        .then(data=>setCourse(data))
    } ,[] );
    if(!courses){
        return <></>
    }

    const courseList=courses.map(
        (course)=><Course key={course.id} name={course.name} image={course.image} 
        price={course.price} rating={course.rating}/>
    
    )
    return(
        <>{courseList}</>
    );
}
export default Fetch;