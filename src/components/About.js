import '../styles/about.css'
import ownersImageA from "../assets/Mario and Adrian A.jpg"
import ownersImageB from "../assets/Mario and Adrian b.jpg"

function About() {
    const imageBStyle = {
        position:"relative",
        left: '-75px',
    }

    return (
        <section id='about'>
            <article style={{ flexDirection: 'column'}}>
                <h1>Little Lemon</h1>
                <h2 className="sub">Chicago</h2>
                <p>Risus ultricies tristique nulla aliquet enim tortor at auctor. Eu nisl nunc mi ipsum. Congue eu consequat ac felis donec et odio. Eu consequat ac felis donec et odio pellentesque. Euismod nisi porta lorem mollis aliquam ut.</p>
            </article>
            <div style={{position: 'relative', width: '425px'}}>
                <img src={ownersImageA} style={{zIndex: '10', position: 'relative', top: '40px'}} alt="Mario and Adrian A" />
                <img src={ownersImageB} style={imageBStyle} alt="Mario and Adrian B" />
            </div>
        </section>
    )
}

export default About;