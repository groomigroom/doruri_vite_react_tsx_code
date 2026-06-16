import "./home.css";

import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div className="home_full">
            <section className="home_p1">
                <section className="home_p1_trainf">
                    <section className="home_p1_train">
                        <Link to="/" className="home_link">Home</Link>
                        <Link to="/TriplesEvent" className="home_link home_tri_link">TriplesEvent</Link>
                        <Link to="/TxtEvent" className="home_link home_txt_link">TxtEvent</Link>
                        <Link to="/AkmuEvent" className="home_link home_akm_link">AkmuEvent</Link>
                    </section>
                    <section className="home_p1_train">
                        <Link to="/" className="home_link">Home</Link>
                        <Link to="/TriplesEvent" className="home_link home_tri_link">TriplesEvent</Link>
                        <Link to="/TxtEvent" className="home_link home_txt_link">TxtEvent</Link>
                        <Link to="/AkmuEvent" className="home_link home_akm_link">AkmuEvent</Link>
                    </section>
                    <section className="home_p1_train">
                        <Link to="/" className="home_link">Home</Link>
                        <Link to="/TriplesEvent" className="home_link home_tri_link">TriplesEvent</Link>
                        <Link to="/TxtEvent" className="home_link home_txt_link">TxtEvent</Link>
                        <Link to="/AkmuEvent" className="home_link home_akm_link">AkmuEvent</Link>
                    </section>
                </section>
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
