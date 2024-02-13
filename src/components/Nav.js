import { NavLink, Link } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import useWindowDimensions from '../hooks/useWindowDimensions';
import llLogo from '../assets/LLLogo.png';
import basketIcon from '../assets/basket.svg'
import HamburgerMenu from "./HamburgerMenu";

function Nav() {
    const { width } = useWindowDimensions();
    const breakPoint = 768;

    const isSmall = () => width < breakPoint;

    return (
        <nav id="nav">
            {isSmall() && <HamburgerMenu />}
            <Link id="logoLink" to="/"><img src={llLogo} alt='Little Lemon Logo' style={{height: '70px'}}/></Link>
            <ul id="navList">
                <li><NavHashLink smooth to="/#nav">Home</NavHashLink></li>
                <li><HashLink smooth to="/#about">About</HashLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/reservations">Reservations</NavLink></li>
                <li><NavLink to="/order">Order Online</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
            {isSmall() && <Link id="cartLink" className="svgFilter" to="/cart"><img src={basketIcon} alt="shopping cart" /></Link>}
        </nav>
    );
}

export default Nav;