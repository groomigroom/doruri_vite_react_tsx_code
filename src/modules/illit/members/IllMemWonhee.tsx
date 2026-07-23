import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './IllMemWonhee.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import ill_mm_wonhee_img from '../main/img/illit_m_mem_Wonhee.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IllMemWonhee() {
    return (
        <div className="ill_mm_wonhee_full">
            <Menu />
            <section className="home_translate">
                <Link to='/IllMemWonhee' className="on">한국어</Link>
                <Link to='/IllMemWonheeEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="illit 로고 꾸미기" />원희<img src={MainH2Deco} alt="illit 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                긍정적인 마음으로<br />
                활발하게 &apos;ILLIT&apos; 멤버로<br />
                활동해 볼게요!</p>
            <img src={ill_mm_wonhee_img} alt="원희 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2007년 6월 26일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>162cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>캐릭터</p></td>
                        <td><p>곰돌희</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>워니</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>키링 만들기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td>
                            <p>잠꼬대</p></td>
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
