import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './TwsMemHanjin.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tws_mm_hanjin_img from '../main/img/tws_m_mem_Hanjin.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TwsMemHanjin() {
    return (
        <div className="tws_mm_hanjin_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TwsMemHanjin' className="on">한국어</Link>
                <Link to='/TwsMemHanjinEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="TWS 꾸미기" />한진<img src={MainH2Deco} alt="TWS 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                풍부한 감수성과<br />
                진중한 마음을 가지고<br />
                여러분을 찾아 갈게요!</p>
            <img src={Tws_mm_hanjin_img} alt="한진 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb tws_mm_hanjin_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2006년 1월 5일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>176cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>AB형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>서브 보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>박한진</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>배려심 깊음</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );
};
