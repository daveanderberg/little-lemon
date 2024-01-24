import { NavLink } from "react-router-dom";
import { handleAHashClick } from "../utitilies";
import llLogo from '../assets/LLLogo.png';

function Nav() {
    const logoStyle = {
        height: "90px",
    };

    return (
        <nav>
            <img src={llLogo} alt='Little Lemon Logo' style={{height: '70px'}}/>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><a onlick={handleAHashClick("about")} href="#about">About</a></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/reservations">Reservations</NavLink></li>
                <li><NavLink to="/order">Order Online</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;