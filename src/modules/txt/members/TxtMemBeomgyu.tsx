import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './TxtMemBeomgyu.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Txt_mm_Beomgyu_img from '../main/img/txt_m_mem_beomgyu.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TxtMemBeomgyu() {
    return (
        <div className="txt_mm_beomgyu_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TxtMemBeomgyu' className="on">한국어</Link>
                <Link to='/TxtMemBeomgyuEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="투모로우바이투게더 로고 꾸미기" />범규<img src={MainH2Deco} alt="투모로우바이투게더 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                밝고 활발한<br />
                표정으로<br />
                여러분을 찾아 갈게요!</p>
            <img src={Txt_mm_Beomgyu_img} alt="범규 이미지" className='tri_mm_s1_img txt_mm_beomgyu_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2001년 3월 13일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>179cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>AB형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>밤규</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>기타 연주</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>떠들기</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td>
                            <p>INFP</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>밝음</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 빅히트 뮤직' />
        </div>
    );
}
