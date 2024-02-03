import { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';
import Spinner from './Spinner';
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const setData = (data) => {
        const newUsers = data.results.map((user) => {
            return {
                id: uuidv4(),
                name: user.name.first,
                image: user.picture.medium,
                rating: (Math.random() * (5 - 3) + 3).toFixed(1),
        }})

        newUsers[0] = {...newUsers[0], review: "The Greek Salad is light and delicious!"};
        newUsers[1] = {...newUsers[1], review: "I eat at Little Lemon at least once a week!"};
        newUsers[2] = {...newUsers[2], review: "Food was good but I'm annoyed I couldn't get a table.."};
        newUsers[3] = {...newUsers[3], review: "We had a great meal followed up by the tasty lemon dessert. Give it a try!"};

        setUsers(newUsers);
        setIsLoading(false);
    }

    useEffect(() => {
        setIsLoading(true);
        fetch('https://randomuser.me/api/?results=4')
            .then(response => {
                return response.json()
            })
            .then(data => setData(data))
            .catch(error => {
                console.log(error)
                setIsLoading(false);
                setUsers(null);
            });
    },[]);

    return (
        <section className="testimonials">
            <h2>Testimonials</h2>
            <div>
                {isLoading && <Spinner />}
                {(!isLoading && users !== null) && users.map(user => <TestimonialCard key={user.id} rating={user.rating} name={user.name} image={user.image} review={user.review} />)}
                {(!isLoading && users === null) && <p>There was an error loading the testimonials.</p>}
            </div>
        </section>
    );
}

export default Testimonials;