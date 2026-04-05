import './style.css';
import react from './assets/reactpage.png';
import js from './assets/jsss.png';
import css from './assets/csspage.png';
import html from './assets/htmlpage.png';
import Course from "./Course";
const CourseList=()=>{

    const courses=[
        {
            image:html,
            name : "HTML",
            anotherprice:1999,
            price : 199,
            rating : 5
        },
        {
            image:css,
            name : "CSS",
            anotherprice:2999,
            price :299,
            rating :4
        },
        {
            image: js,
            name : "JS",
            anotherprice:1000,
            price :100,
            rating :5
        },
        {
            image:react,
            name:"React",
            anotherprice:2000,
            price:1000,
            rating:4
        }
    ];

    const coursesList = courses.map((course)=>
        <Course image={course.image} name={course.name} anotherprice={course.anotherprice} price={course.price} rating={course.rating}/>

    )

    return(
        <div className="course-container">
    {coursesList}
        </div>
    );
}

export default CourseList;