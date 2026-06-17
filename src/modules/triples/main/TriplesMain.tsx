import { Link } from 'react-router-dom';

import './TriplesMain.css';

import Tri_m_logo from './img/tri_m_logo.svg';
import Tri_m_img from './img/tri_m_img.jpg';

export default function TriplesMain() {
    return (
        <div className='tri_m_full'>
            <img src={Tri_m_logo} alt="트리플에스 로고" className='tri_m_logo' />
            <p>우리는 하나이자 스물넷입니다.</p>
            <h2>tripleS</h2>
            <img src={Tri_m_img} className='tri_m_img' />
            <Link to="/TriplesEvent">이벤트</Link>
        </div >
    );
};

