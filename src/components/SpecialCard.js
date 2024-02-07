import {Link} from 'react-router-dom';
import bikeIcon from "../assets/BikeIcon.jpg";

function SpecialCard({imgSrc, title, price, blurb}) {
    const style = {
        borderRadius: '16px 16px 0 0',
        padding: '0',
        margin: '0',
        objectFit: 'cover',
        height: '168px',
        width: '268px',
        alignSelf: 'end',
    };

    return (
        <article className="specialCard">
            <div style={{ overflow: 'hidden' }}>
                <img src={imgSrc} style={style} alt={title} />
            </div>
            <div className="specialCardTitle">
                <h5>{title}</h5>
                <h5>{price}</h5>
            </div>
            <div className="blurb"><p>{blurb}</p></div>
            <Link to="/order">Order a delivery <img src={bikeIcon} alt="Bike Icon" /></Link>
        </article>
    );

}

export default SpecialCard;