import Register from "./Register";
import Login from "./Login";
import About from "./About";
import Home from "./Home";
import {Routes,Route,Link} from "react-router-dom";

const Header=()=>{
    return (
        <>
        <nav className="nav">
            <Link to='/' className="link">Home</Link>
            <Link to='/register' className="link">Register</Link>
            <Link to='/login' className="link">Login</Link>
            <Link to='/about' className="link">About</Link>
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