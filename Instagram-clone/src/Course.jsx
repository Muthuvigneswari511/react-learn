const Course=(props)=>{
    return(
        <>
        <p>{props.id}</p>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <img src={props.image}/>
        <p>{props.rating}</p>
        </>
    );
}
export default Course;