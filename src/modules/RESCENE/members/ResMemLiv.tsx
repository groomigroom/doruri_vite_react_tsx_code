import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './ResMemLiv.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import res_mm_liv_img from '../main/img/rescene_m_mem_Liv.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ResMemLiv() {
    return (
        <div className="res_mm_liv_full">
            <Menu />
            <section className="home_translate">
                <Link to='/ResMemLiv' className="on">한국어</Link>
                <Link to='/ResMemLivEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="리센느 꾸미기" />리브<img src={MainH2Deco} alt="리센느 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                좋은 기억력을<br />
                살려서 좋은 음악 작업에<br />
                많이 참여해 볼게요!</p>
            <img src={res_mm_liv_img} alt="리브 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2006년 10월 11일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>165cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>리트</p></td>
                    </tr>
                    <tr>
                        <td><p>remini</p></td>
                        <td><p>리뿌</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>햄스터</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESFP</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td>
                            <p>보드게임</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>개성있음</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 더뮤즈엔터테인먼트' />
        </div>
    );

};
