import { Link } from 'react-router-dom';

import "./AkmuMain.css";
import "../../triples/main/TriplesMain.css";

import Menu from '../../Menu';

export default function AkmuMain() {
    return (
        <div className='akmu_m_full'>
            <Menu />
            <Link to='/AkmuEvent'>이벤트로 가기</Link>
        </div>
    );
};
