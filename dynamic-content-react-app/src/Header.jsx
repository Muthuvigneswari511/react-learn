import Register from "./Register";
import Login from "./Login";
import About from "./About";
import CourseList from "./CourseList";
import {Routes,Route,Link} from "react-router-dom";
const Header=()=>{
    return (
        <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/about'>About</Link>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        </>
    );
}
export default Header;