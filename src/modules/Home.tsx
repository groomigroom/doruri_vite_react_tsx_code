import { Link } from "react-router-dom";

import "./home.css";

import Menu from './Menu';
import FooterPart from "./FooterPart";

export default function Home() {
    return (
        <div className="home_full">
            <Menu />
            <section className="home_translate">
                <Link to='/' className="on">한국어</Link>
                <Link to='/Eng'>English</Link>
            </section>
            <FooterPart />
        </div>
    )
}
