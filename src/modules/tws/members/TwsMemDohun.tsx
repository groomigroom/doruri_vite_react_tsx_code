import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './TwsMemDohun.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tws_mm_dohun_img from '../main/img/tws_m_mem_Dohun.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TwsMemDohun() {
    return (
        <div className="tws_mm_dohun_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TwsMemDohun' className="on">한국어</Link>
                <Link to='/TwsMemDohunEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="TWS 꾸미기" />도훈<img src={MainH2Deco} alt="TWS 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                다정하게<br />
                멤버들을 잘 챙기며<br />
                여러분을 만나러 갈게요!</p>
            <img src={Tws_mm_dohun_img} alt="도훈 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb tws_mm_dohun_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2005년 1월 30일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>181cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>올라운더</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISTP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>후니</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>솔직함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 플레디스 엔터테인먼트' />
        </div>
    );
};
