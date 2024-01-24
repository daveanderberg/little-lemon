import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import llLogo from '../assets/LLLogo.png';

function Nav() {
    return (
        <nav>
            <img src={llLogo} alt='Little Lemon Logo' style={{height: '70px'}}/>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavHashLink smooth to="/#about">About</NavHashLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/reservations">Reservations</NavLink></li>
                <li><NavLink to="/order">Order Online</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;