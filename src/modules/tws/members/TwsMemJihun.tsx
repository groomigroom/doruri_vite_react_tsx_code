import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './TwsMemJihun.css';

import Menu from '../../Menu';

import Tws_mm_jihun_img from '../main/img/tws_m_mem_Jihun.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TwsMemJihun() {
    return (
        <div className="tws_mm_jihun_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TwsMemJihun' className="on">한국어</Link>
                <Link to='/TwsMemJihunEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="TWS 꾸미기" />지훈<img src={MainH2Deco} alt="TWS 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                밝게 웃으며<br />
                즐거운 마음으로<br />
                여러분을 찾아 갈게요!</p>
            <img src={Tws_mm_jihun_img} alt="지훈 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb tws_mm_jihun_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2006년 3월 28일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>178.9cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>메인댄서</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>해파리</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>밝음</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};
