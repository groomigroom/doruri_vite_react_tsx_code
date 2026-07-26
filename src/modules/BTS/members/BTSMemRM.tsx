import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './BTSMemRM.css';

import Menu from '../../Menu';

//import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BTSMemRM() {
    return (
        <div className="bts_mm_rm_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BTSMemRM' className="on">한국어</Link>
                <Link to='/BTSMemRMEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="방탄소년단 꾸미기" />RM<img src={MainH2Deco} alt="방탄소년단 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                &apos;RM&apos;과 함께<br />
                비오는 날에도<br />
                힘내봐요!
            </p>
            <img src='' alt="RM 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1994년 9월 12일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>181cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>리더, 메인래퍼</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>리더래퍼</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>고민이 많음</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};
