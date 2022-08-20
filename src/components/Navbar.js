
import { logo } from "../constants/navbar";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className="navbar__wrapper">

            <img src={logo} alt="logo" onClick={() => navigate('/')} />

            <div className="navbar__links">
                <NavLink className='navbar__links_item' to='/apply'>Apply</NavLink>
                <NavLink className='navbar__links_item' to='/account'>Current Students</NavLink>
                <NavLink className='navbar__links_item' to='/courses'>Offered Courses</NavLink>
                <NavLink className='navbar__links_item' to='/contact'>Contact</NavLink>
            </div>

        </div>
    )};

export default Navbar;