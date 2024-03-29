import '../styles/footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import llFooterLogo from '../assets/llFooterLogo.png';
import facebookLogo from '../assets/facebookLogo.png';
import instagramLogo from '../assets/instagramLogo.png';
import xLogo from '../assets/xLogo.png';

function Footer() {
    const imgStyle = {
        filter: 'brightness(0) invert(1)',
        height: '160px',
    }

    return (
        <footer>
            <div>
                <img id="footerLogo" src={llFooterLogo} style={imgStyle} alt='Little Lemon footer logo' />
                <div id="footerLinks">
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><HashLink smooth to='/#nav'>Home</HashLink></li>
                        <li><HashLink smooth to='/#about'>About</HashLink></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/reservations'>Reservations</Link></li>
                        <li><Link to='/order'>Order Online</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
                <div id="contact">
                    <h4>Contact</h4>
                    <p>324 26th Street<br />Chicago, IL 97654</p>
                    <br />
                    <p><a href='tel:5099540290'>657-876-3241</a></p>
                    <br />
                    <p><a href='mailto:info@littlelemon.com'>info@littlelemon.com</a></p>
                </div>
                <div id="social">
                    <h4>Social Media</h4>
                    <a href='http://www.facebook.com'><img src={facebookLogo} alt='Facebook logo' /></a>
                    <a href='http://www.instagram.com'><img src={instagramLogo} alt='Instagram logo'/></a>
                    <a href='http://www.twitter.com'><img src={xLogo} alt='X (formerly Twitter) logo'/></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;