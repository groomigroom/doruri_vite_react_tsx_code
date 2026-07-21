import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './StrayMemChangbin.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Str_mm_changbin_img from '../main/img/stray_m_mem_Changbin.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function StrayMemChangbin() {
    return (
        <div className="str_mm_changbin_full">
            <Menu />
            <section className="home_translate">
                <Link to='/StrayMemChangbin' className="on">한국어</Link>
                <Link to='/StrayMemChangbinEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" />창빈<img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                멤버들에게 공감하며<br />
                멤버들과 함께 좋은 분위기를<br />
                유지해 볼게요!</p>
            <img src={Str_mm_changbin_img} alt="창빈 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1999년 8월 11일</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>3RACHA</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESTP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>돼끼</p></td>
                    </tr>
                    <tr>
                        <td><p>SKZOO</p></td>
                        <td><p>돼끼</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>돼지토끼</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td>
                            <p>메인 래퍼</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>섬세함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );
}
