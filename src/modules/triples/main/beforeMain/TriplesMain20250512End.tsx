import { Link } from "react-router-dom";
import { DoruriDocumentTitle } from "../../../DoruriDocumentTitle";

import '../TriplesMain.css';
import './TriplesMain20250512End.css';

import Menu from "../../../Menu";

import tri_20250512_m_logo from './img/Triples_2025_m_logo.svg';

export default function TriplesMain20250512End() {
    DoruriDocumentTitle('tripleS');

    return (
        <div className="tri_20250512_m_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMain20250512End' className="on">한국어</Link>
                <Link to='/TriplesMain20250512EndEng'>English</Link>
            </section>
            <img src={tri_20250512_m_logo} alt="트리플에스 로고" className='tri_m_logo' />
        </div>
    );
}
