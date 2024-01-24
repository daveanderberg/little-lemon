import llHeaderImage from '../assets/llHeaderImage.jpg';

function Header() {
    const imgStyle = {
        width: '20rem',
        height: '20rem',
        borderRadius: '16px',
        objectFit: 'cover',
    };

    return (
        <header>
            <div className="headerDiv">
                <div className="headerTextColumn">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button className='yellowButton' id='reserveTableButton'>Reserve a Table</button>
                </div>
                <div className="headerImageDiv">
                    <img src={llHeaderImage} style={imgStyle} alt="image of food" />
                </div>
            </div>
        </header>
    );
}

export default Header;