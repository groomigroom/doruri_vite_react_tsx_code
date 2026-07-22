import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './TxtMemTaehyun.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Txt_mm_Taehyun_img from '../main/img/txt_m_mem_taehyun.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TxtMemTaehyun() {
    return (
        <div className="txt_mm_taehyun_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TxtMemTaehyun' className="on">한국어</Link>
                <Link to='/TxtMemTaehyunEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="투모로우바이투게더 로고 꾸미기" />태현<img src={MainH2Deco} alt="투모로우바이투게더 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                멤버들을 잘 챙기고<br />
                침착하게<br />
                여러분을 찾아 갈게요!</p>
            <img src={Txt_mm_Taehyun_img} alt="태현 이미지" className='tri_mm_s1_img txt_mm_taehyun_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2002년 2월 5일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>177cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>강금쪽</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>복싱</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>마술</p></td>
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
                        <td><p>똑부러짐</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 빅히트 뮤직' />
        </div>
    );
}
