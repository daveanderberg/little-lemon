import llLogo from '../assets/LLLogo.png'

function Nav() {
    const logoStyle = {
        height: "90px",
    };

    return (
        <nav>
            <img src={llLogo} alt='Little Lemon Logo' style={{height: '70px'}}/>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;