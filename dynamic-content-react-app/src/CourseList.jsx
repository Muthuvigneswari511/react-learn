import './style.css';
import Course from "./Course";
const CourseList=()=>{

    const courses=[
        {
            name : "HTML",
            price : 199,
            rating : 5
        },
        {
            name : "CSS",
            price :299,
            rating :4
        },
        {
            name : "JS",
            price :100,
            rating :5
        }
    ];

    const coursesList = courses.map((course)=>
        <Course name={course.name} price={course.price} rating={course.rating}/>

    )

    return(
        <div className='mi'>
        {coursesList}
        </div>
    );
}

export default CourseList;