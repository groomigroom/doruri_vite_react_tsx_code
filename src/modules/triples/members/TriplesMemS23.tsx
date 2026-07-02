import './TriplesMemS1.css';
import './TriplesMemS23.css';

import Menu from '../../Menu';

import Tri_mm_s23_img from '../main/img/tri_m_memS23.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS23() {
    return (
        <div className="tri_mm_s23_full">
            <Menu />
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />서아<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>#####24명은 너무 많지 않아요?<br />
                그리고... 그리고... 그리고...<br />
                더 열심히 더 열심히</p>
            <img src={Tri_mm_s23_img} alt="서아 이미지" className='tri_mm_s1_img' />

        </div>
    );
};

















