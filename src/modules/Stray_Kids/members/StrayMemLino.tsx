import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './StrayMemLino.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Str_mm_lino_img from '../main/img/stray_m_mem_Lino.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function StrayMemLino() {
    return (
        <div className="str_mm_lino_full">
            <Menu />
            <section className="home_translate">
                <Link to='/StrayMemLino' className="on">한국어</Link>
                <Link to='/StrayMemLinoEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" />리노<img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                따뜻한 마음과<br />
                즐거운 마음을 담아서<br />
                여러분을 찾아 갈게요!</p>
            <img src={Str_mm_lino_img} alt="리노 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1998년 10월 25일</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>DANCERACHA</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>이리노</p></td>
                    </tr>
                    <tr>
                        <td><p>SKZOO</p></td>
                        <td><p>리빗</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>토끼</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td>
                            <p>메인 댄서</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>사교적임</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );
}
