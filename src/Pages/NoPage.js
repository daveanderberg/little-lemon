import { Link } from "react-router-dom";

function NoPage() {
    return (
        <main>
            <h3>Not Found</h3>
            <p>The requested page cannot be found.</p>
            <p><Link to="/">Return to Home</Link></p>
        </main>
    );
}

export default NoPage;