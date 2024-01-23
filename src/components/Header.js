import llHeaderImage from '../assets/llHeaderImage.jpg';

function Header() {
    const imgStyle = {
        width: '20rem',
        height: '20rem',
        borderRadius: '16px',
        margin: '20px 0',
        objectFit: 'cover',
    };

    return (
        <header>
            <div className="headerDiv">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <a href='' role='button'>Reserve a Table</a>
                </div>
                <img src={llHeaderImage} style={imgStyle} alt="image of food" />
            </div>
        </header>
    );
}

export default Header;