import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/members/TriplesMemS1.css';
import './BTSMemJimin.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Bts_Jimin_m_img from '../main/img/Bts_mm_Jimin_img.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BTSMemJimin() {
    DoruriDocumentTitle('지민');

    return (
        <div className="bts_mm_jimin_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BTSMemJimin' className="on">한국어</Link>
                <Link to='/BTSMemJiminEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'>
                <img src={MainH2Deco} alt="방탄소년단 꾸미기" />지민<img src={MainH2Deco} alt="방탄소년단 꾸미기" />
            </h2>
            <p className='tri_mm_s1_intropp'>
                &apos;지민&apos;과 함께<br />
                나에게 맞는 것을<br />
                찾으러 가봐요!
            </p>
            <img src={Bts_Jimin_m_img} alt="지민 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb bts_mm_jimin_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1995년 10월 13일</p></td>
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
                        <td><p>포지션</p></td>
                        <td><p>메인댄서, 리드보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESTJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>빡지민이</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>??</p></td>
                    </tr>
                </tbody>
            </table>

            <FooterPart FooterPartText='ⓒ 빅히트 뮤직' />
        </div>
    );
};
