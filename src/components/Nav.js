import { NavLink, Link } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import llLogo from '../assets/LLLogo.png';

function Nav() {
    return (
        <nav id="nav">
            <Link to="/"><img src={llLogo} alt='Little Lemon Logo' style={{height: '70px'}}/></Link>
            <ul>
                <li><NavHashLink smooth to="/#nav">Home</NavHashLink></li>
                <li><HashLink smooth to="/#about">About</HashLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/reservations">Reservations</NavLink></li>
                <li><NavLink to="/order">Order Online</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;