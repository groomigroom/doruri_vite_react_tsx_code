import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './TwsMemYoungjae.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tws_mm_youngjae_img from '../main/img/tws_m_mem_Youngjae.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TwsMemYoungjae() {
    return (
        <div className="tws_mm_youngjae_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TwsMemYoungjae' className="on">한국어</Link>
                <Link to='/TwsMemYoungjaeEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="TWS 꾸미기" />영재<img src={MainH2Deco} alt="TWS 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                조용하지만<br />
                다정한 마음을 가지고<br />
                여러분을 찾아 갈게요!</p>
            <img src={Tws_mm_youngjae_img} alt="영재 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb tws_mm_youngjae_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2005년 5월 31일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>180cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>AB형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>메인 보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISTJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>영춘이</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>다정함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 플레디스 엔터테인먼트' />
        </div>
    );
};
