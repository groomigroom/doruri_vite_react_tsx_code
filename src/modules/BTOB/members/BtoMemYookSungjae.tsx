import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './BtoMemYookSungjae.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BtoMemYookSungjae() {
    return (
        <div className="bto_mm_yooksungjae_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BtoMemYookSungjae' className="on">한국어</Link>
                <Link to='/BtoMemYookSungjaeEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="BTOB 꾸미기" />육성재<img src={MainH2Deco} alt="BTOB 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                &apos;육성재&apos;와 함께<br />
                좋은 기억을<br />
                잘 간직해 봐요!
            </p>
            {/* 이미지랑 테이블하기 */}
            <img src='' alt="육성재 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1995년 5월 2일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>180cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>비투비-블루</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>서브보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENTP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>육잘또</p></td>
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

