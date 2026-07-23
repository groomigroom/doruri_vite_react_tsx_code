import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './IllMemMoka.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import ill_mm_moka_img from '../main/img/illit_m_mem_Moka.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IllMemMoka() {
    return (
        <div className="ill_mm_moka_full">
            <Menu />
            <section className="home_translate">
                <Link to='/IllMemMoka' className="on">한국어</Link>
                <Link to='/IllMemMokaEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="illit 로고 꾸미기" />모카<img src={MainH2Deco} alt="illit 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                긍정적인 마음으로<br />
                웃으면서<br />
                여러분을 만나러 갈게요!</p>
            <img src={ill_mm_moka_img} alt="모카 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2004년 10월 8일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>162cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>캐릭터</p></td>
                        <td><p>모카라떼</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>김목화</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>영화 보기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td>
                            <p>잠을 오래 자는 것</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>긍정적임</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 빌리프랩' />
        </div>
    );
};
