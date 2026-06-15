import "./home.css";

import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div className="home_full">
            <section className="home_p1">
                <Link to="/">Home</Link>
                <Link to="/TriplesEvent">TriplesEvent</Link>
                <Link to="/TxtEvent">TxtEvent</Link>
                <Link to="/AkmuEvent">AkmuEvent</Link>
            </section>
            <section className="home_p2">
                <section className="home_p2_con">
                    <article></article>
                    <article></article>
                    <article></article>
                </section>
            </section>
        </div>
    )
}
