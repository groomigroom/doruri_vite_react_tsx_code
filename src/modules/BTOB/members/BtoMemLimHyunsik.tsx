import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './BtoMemLimHyunsik.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BtoMemLimHyunsik() {
    return (
        <div className="bto_mm_limhyunsik_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BtoMemLimHyunsik' className="on">한국어</Link>
                <Link to='/BtoMemLimHyunsikEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="BTOB 꾸미기" />임현식<img src={MainH2Deco} alt="BTOB 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                &apos;임현식&apos;과 함께<br />
                더 담아 두고<br />
                더 간직해봐요!
            </p>
            {/* 이미지랑 테이블하기 */}
            <img src='' alt="임현식 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1992년 3월 7일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>174cm</p></td>
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
                        <td><p>리드보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INTP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>임선배</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>느긋함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />

        </div>
    );
};

