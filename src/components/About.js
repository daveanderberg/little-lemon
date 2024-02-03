import ownersImageA from "../assets/Mario and Adrian A.jpg"
import ownersImageB from "../assets/Mario and Adrian b.jpg"

function About() {
    return (
        <section id='about'>
            <article style={{width: '70%'}}>
                <h1>Little Lemon</h1>
                <h2 className="sub">Chicago</h2>
                <p>Risus ultricies tristique nulla aliquet enim tortor at auctor. Eu nisl nunc mi ipsum. Congue eu consequat ac felis donec et odio. Eu consequat ac felis donec et odio pellentesque. Euismod nisi porta lorem mollis aliquam ut.</p>
            </article>
            <div style={{position: 'relative', height: '330px', width: '245px'}}>
                <img src={ownersImageA} alt="Mario and Adrian A" />
                <img src={ownersImageB} style={{position:"absolute", top: '50px', left: '-50px'}} alt="Mario and Adrian B" />
            </div>
        </section>
    )
}

export default About;