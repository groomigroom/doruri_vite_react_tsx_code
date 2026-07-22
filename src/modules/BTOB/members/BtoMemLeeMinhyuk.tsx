import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './BtoMemLeeMinhyuk.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BtoMemLeeMinhyuk() {
    return (
        <div className="bto_mm_leeminhyuk_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BtoMemLeeMinhyuk' className="on">한국어</Link>
                <Link to='/BtoMemLeeMinhyukEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="BTOB 꾸미기" />이민혁<img src={MainH2Deco} alt="BTOB 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                &apos;이민혁&apos;과 함께<br />
                Pedal down,<br />
                vroom-vroom!
            </p>
            {/* 이미지랑 테이블하기 */}
            <img src='' alt="이민혁 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1990년 11월 29일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>171cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>비투비 포유, 구공탄</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>메인래퍼</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISTJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>허타람찌</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>꼼꼼함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />

        </div>
    );
};


