import starImage from '../assets/star.jpg';

function TestimonialCard ({rating, image, name, review}) {
    const starStyle = {
        height: '2rem',
        display: 'inline-block'
    }

    return (
        <article className="testimonialCard">
            <div className="ratingDiv"><img src={starImage} style={starStyle} alt="star"/><h5>{rating}</h5></div>
            <div>
                <img src={image} alt="reviewer portrait" style={{marginRight:'8px',}} />
                <p style={{fontWeight: '600', alignSelf: 'end'}}>{name}</p>
            </div>
            <blockquote>"{review}"</blockquote>
        </article>
    );
}

export default TestimonialCard;