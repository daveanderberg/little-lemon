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
                <img src={llFooterLogo} style={imgStyle} />
                <div>
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Reservations</a></li>
                        <li><a>Order Online</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>324 26th Street<br />Chicago, IL 97654</p>
                    <br />
                    <p><a href='tel:5099540290'>657-876-3241</a></p>
                    <br />
                    <p><a href='mailto:info@littlelemon.com'>info@littlelemon.com</a></p>
                </div>
                <div>
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