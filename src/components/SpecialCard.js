import {Link} from 'react-router-dom';
import bikeIcon from "../assets/BikeIcon.jpg";

function SpecialCard({imgSrc, title, price, blurb}) {
      return (
        <article className="specialCard">
            <div class="cardImageDiv">
                <img class="cardImage" src={imgSrc} alt={title} />
            </div>
            <div className="specialCardTitle">
                <h5>{title}</h5>
                <h5 className='headerPrice'>{price}</h5>
            </div>
            <div className="blurb"><p>{blurb}</p></div>
            <Link className="specialsLink" to="/order">Order a delivery <img src={bikeIcon} alt="Bike Icon" /></Link>
            <div className="price">
                {price}
            </div>
        </article>
    );

}

export default SpecialCard;