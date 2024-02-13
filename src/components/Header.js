import llHeaderImage from '../assets/llHeaderImage.jpg';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <div className="headerDiv">
                <h1 style={{gridArea: 'header'}}>Little Lemon</h1>
                <h2 className="sub" style={{gridArea: 'subheader'}}>Chicago</h2>
                <p style={{gridArea: 'blurb', alignSelf: 'center'}}>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button className='yellowButton' id='reserveTableButton' onClick={() => navigate('/reservations')}>Reserve a Table</button>
                <div className="headerImageDiv">
                    <img id='headerImage' src={llHeaderImage} alt="food" />
                </div>
            </div>
        </header>
    );
}

export default Header;