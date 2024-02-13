import '../styles/specials.css'
import SpecialCard from "./SpecialCard";
import { useNavigate } from "react-router-dom";
import saladImage from "../assets/saladImage.jpg";
import bruschettaImage from "../assets/brushettaImage.jpg";
import lemonImage from "../assets/lemon dessert.jpg";

function Specials() {
    const navigate = useNavigate();

    const specials = [{
        title: 'Greek Salad',
        price: "$12.99",
        imgSrc: saladImage,
        blurb: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },{
        title: 'Brushetta',
        price: '$7.99',
        imgSrc: bruschettaImage,
        blurb: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
    }, {
        title: 'Lemon Dessert',
        price: '$5.99',
        imgSrc: lemonImage,
        blurb: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    }];

    const specialCards = specials.map((special) => {
        return (
            <SpecialCard key={special.title} title={special.title} blurb={special.blurb} imgSrc={special.imgSrc} price={special.price} />
        );
    });

    return (
        <section id="specials">
            <div className="specialsHeader">
                <h2 id="specialsHeader">This weeks Specials</h2>
                <h6 id="orderHeader">order for delivery!</h6>
                <button className="yellowButton" onClick={() => navigate('/order')}>Online Menu</button>
            </div>
            <div className="specialsList">
                {specialCards}
            </div>
        </section>
    );
}

export default Specials;