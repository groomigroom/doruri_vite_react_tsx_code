import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './IllMemEroha.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import ill_mm_eroha_img from '../main/img/illit_m_mem_Iroha.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IllMemEroha() {
    return (
        <div className="ill_mm_eroha_full">
            <Menu />
            <section className="home_translate">
                <Link to='/IllMemEroha' className="on">한국어</Link>
                <Link to='/IllMemErohaEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="illit 로고 꾸미기" />이로하<img src={MainH2Deco} alt="illit 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                완벽하게<br />
                잘 준비해서<br />
                여러분을 만나러 갈게요!</p>
            <img src={ill_mm_eroha_img} alt="이로하 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2008년 2월 4일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>158cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>캐릭터</p></td>
                        <td><p>빼꼬</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>로하</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>음악 듣기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td>
                            <p>다도</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>감성적임</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 빌리프랩' />
        </div>
    );
};
