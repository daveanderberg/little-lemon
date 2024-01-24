import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Specials from '../components/Specials';

function Home() {
    return (
        <>
            <Header />
            <main>
                <Specials />
                <Testimonials />
                <About />
            </main>
        </>
    )
}

export default Home;