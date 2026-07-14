import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './TxtMemHueningkai.css';

import Menu from '../../Menu';

import Txt_mm_Hueningkai_img from '../main/img/txt_m_mem_hueningkai.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TxtMemHueningkai() {
    return (
        <div className="txt_mm_hueningkai_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TxtMemHueningkai' className="on">한국어</Link>
                <Link to='/TxtMemHueningkaiEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="투모로우바이투게더 로고 꾸미기" />휴닝카이<img src={MainH2Deco} alt="투모로우바이투게더 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                거짓없이<br />
                잘 준비해서<br />
                여러분을 찾아 갈게요!</p>
            <img src={Txt_mm_Hueningkai_img} alt="휴닝카이 이미지" className='tri_mm_s1_img txt_mm_hueningkai_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2002년 8월 14일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>183cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>휴닝이</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>악기 연주</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>멍 때리기</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td>
                            <p>ISTP</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>배려심 깊음</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
