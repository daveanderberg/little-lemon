import llHeaderImage from '../assets/llHeaderImage.jpg';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

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
                    <button className='yellowButton' id='reserveTableButton' onClick={() => navigate('/reservations')}>Reserve a Table</button>
                </div>
                <div className="headerImageDiv">
                    <img src={llHeaderImage} style={imgStyle} alt="food" />
                </div>
            </div>
        </header>
    );
}

export default Header;