import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './TwsMemSinyu.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tws_mm_sinyu_img from '../main/img/tws_m_mem_Sinyu.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TwsMemSinyu() {
    return (
        <div className="tws_mm_sinyu_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TwsMemSinyu' className="on">한국어</Link>
                <Link to='/TwsMemSinyuEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="TWS 꾸미기" />신유<img src={MainH2Deco} alt="TWS 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                낯을 많이 가리지만<br />
                그래도 다정하게<br />
                여러분을 찾아 갈게요!</p>
            <img src={Tws_mm_sinyu_img} alt="신유 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb tws_mm_sinyu_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2003년 11월 7일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>182cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>리더</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>유</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>다정함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );
};
