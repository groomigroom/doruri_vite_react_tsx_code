import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './BtoMemPeniel.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BtoMemPeniel() {
    return (
        <div className="bto_mm_peniel_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BtoMemPeniel' className="on">한국어</Link>
                <Link to='/BtoMemPenielEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="BTOB 꾸미기" />프니엘<img src={MainH2Deco} alt="BTOB 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                &apos;프니엘&apos;과 함께<br />
                발견된 문제를<br />
                잘 해결해 봐요!
            </p>
            {/* 이미지랑 테이블하기 */}
            <img src='' alt="프니엘 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1993년 3월 10일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>174cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>비투비 포유</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>리드래퍼, 메인댄서</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESTP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>동그니</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>착함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />

        </div>
    );
};
