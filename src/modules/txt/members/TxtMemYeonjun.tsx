import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './TxtMemYeonjun.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Txt_mm_Yeonjun_img from '../main/img/txt_m_mem_yeonjun.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TxtMemYeonjun() {
    return (
        <div className="txt_mm_yeonjun_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TxtMemYeonjun' className="on">한국어</Link>
                <Link to='/TxtMemYeonjunEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="투모로우바이투게더 로고 꾸미기" />연준<img src={MainH2Deco} alt="투모로우바이투게더 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                매일 노력하고<br />
                준비해서<br />
                여러분을 찾아 갈게요!</p>
            <img src={Txt_mm_Yeonjun_img} alt="연준 이미지" className='tri_mm_s1_img txt_mm_yeonjun_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1999년 9월 13일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>181.5cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>연또</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>춤추기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>춤</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td>
                            <p>ESTP</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>활발함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );
}
