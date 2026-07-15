import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './ResMemWoni.css';

import Menu from '../../Menu';

import res_mm_woni_img from '../main/img/rescene_m_mem_Woni.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ResMemWoni() {
    return (
        <div className="res_mm_woni_full">
            <Menu />
            <section className="home_translate">
                <Link to='/ResMemWoni' className="on">한국어</Link>
                <Link to='/ResMemWoniEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="리센느 꾸미기" />원이<img src={MainH2Deco} alt="리센느 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                발랄하지만<br />
                의젓하게<br />
                멤버들을 잘 챙길게요!</p>
            <img src={res_mm_woni_img} alt="원이 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2004년 5월 25일</p></td>
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
                        <td><p>별명</p></td>
                        <td><p>파이리</p></td>
                    </tr>
                    <tr>
                        <td><p>remini</p></td>
                        <td><p>조타</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>고양이</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESFP</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td>
                            <p>??</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>의젓함</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};
