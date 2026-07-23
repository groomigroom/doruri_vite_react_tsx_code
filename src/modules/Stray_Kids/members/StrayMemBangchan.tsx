import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './StrayMemBangchan.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Str_mm_bangchan_img from '../main/img/stray_m_mem_Bangchan.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function StrayMemBangchan() {
    return (
        <div className="str_mm_bangchan_full">
            <Menu />
            <section className="home_translate">
                <Link to='/StrayMemBangchan' className="on">한국어</Link>
                <Link to='/StrayMemBangchanEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" />방찬<img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                언제나 힘내면서<br />
                다정한 마음으로<br />
                여러분을 찾아 갈게요!</p>
            <img src={Str_mm_bangchan_img} alt="방찬 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1997년 10월 3일</p></td>
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
                        <td><p>ENFJ-T</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>여는괄호 ##### 크리스&#40;Chris&#41;</p></td>
                    </tr>
                    <tr>
                        <td><p>SKZOO</p></td>
                        <td><p>울프찬</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>늑대</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td>
                            <p>리더</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>다정함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ JYP엔터테인먼트' />
        </div>
    );
}
