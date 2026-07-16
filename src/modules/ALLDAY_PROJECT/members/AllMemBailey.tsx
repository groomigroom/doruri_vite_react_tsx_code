import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './AllMemBailey.css';

import Menu from '../../Menu';

import All_mm_Bailey_img from '../main/img/allday_m_mem_Bailey.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AllMemBailey() {
    return (
        <div className="all_mm_bailey_full">
            <Menu />
            <section className="home_translate">
                <Link to='/AllMemBailey' className="on">한국어</Link>
                <Link to='/AllMemBaileyEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="allday project 꾸미기" />베일리<img src={MainH2Deco} alt="allday project 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                밝은 모습으로<br />
                깔끔하게 잘 준비해서<br />
                여러분을 만나러 갈게요!</p>
            <img src={All_mm_Bailey_img} alt="베일리 이미지" className='tri_mm_s1_img all_mm_bailey_img' />
            <table className='tri_mm_s1_intropa_tb all_mm_bailey_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2004년 2월 24일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>163cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>??</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>댄서, 래퍼, 보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>깔끔함</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
