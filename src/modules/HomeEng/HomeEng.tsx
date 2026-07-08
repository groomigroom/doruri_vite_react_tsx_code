import { Link } from "react-router-dom";

import "../home.css";

// import Menu from './Menu';

export default function HomeEng() {
    return (
        <div className="home_full">
            {/* <Menu /> */}
            <section className="home_translate">
                <Link to='/'>한국어</Link>
                <Link to='/Eng' className="on">English</Link>
            </section>
        </div>
    )
}
