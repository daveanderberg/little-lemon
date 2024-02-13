import { useState, useRef, useEffect } from 'react';
import { CSSTransition } from  'react-transition-group';
import { NavLink } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import '../styles/hamburger.css';
import hamburgerIcon from '../assets/icon _hamburger menu_.svg';

function HamburgerMenu () {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (e) => {
        setIsOpen(!isOpen);
    }

    const menuRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(!isOpen);
            }
        };

        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [isOpen]);

    return (
        <>
            <CSSTransition in={isOpen} classNames="menu-anim" timeout={160} unmountOnExit >
                <div ref={menuRef} id="hamburgerMenu">
                    <button id="hamburgerButton" className="svgFilterLight" style={{margin: '20.5px 0 21px 25px'}} onClick={toggleMenu}>
                        <img src={hamburgerIcon} alt='hamburger menu' />
                    </button>
                    <ul>
                        <li><NavHashLink smooth to="/#nav" onClick={toggleMenu}>Home</NavHashLink></li>
                        <li><HashLink smooth to="/#about" onClick={toggleMenu}>About</HashLink></li>
                        <li><NavLink to="/menu" onClick={toggleMenu}>Menu</NavLink></li>
                        <li><NavLink to="/reservations" onClick={toggleMenu}>Reservations</NavLink></li>
                        <li><NavLink to="/order" onClick={toggleMenu}>Order Online</NavLink></li>
                        <li><NavLink to="/login" onClick={toggleMenu}>Login</NavLink></li>
                    </ul>
                </div>
            </CSSTransition>
            <button id="hamburgerButton" className="svgFilter" onClick={toggleMenu}>
                <img src={hamburgerIcon} alt='hamburger menu' />
            </button>
        </>
    );
}

export default HamburgerMenu;