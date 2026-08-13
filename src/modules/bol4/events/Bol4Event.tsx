import { Link } from "react-router-dom";
import { DoruriDocumentTitle } from "../../DoruriDocumentTitle";

import Menu from "../../Menu";


export default function Bol4Event() {
    DoruriDocumentTitle('볼빨간사춘기 이벤트');

    return (
        <div className="bol4Event_full">
            <Menu />
            <section className="home_translate">
                <Link to='/Bol4Event' className="on">한국어</Link>
                <Link to='/Bol4EventEng'>English</Link>
            </section>
        </div>
    );
}
