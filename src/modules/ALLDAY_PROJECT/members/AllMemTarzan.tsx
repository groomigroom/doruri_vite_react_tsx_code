import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './AllMemTarzan.css';

import Menu from '../../Menu';

import All_mm_Tarzan_img from '../main/img/allday_m_mem_Tarzan.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AllMemTarzan() {
    return (
        <div className="all_mm_tarzan_full">
            <Menu />
            <section className="home_translate">
                <Link to='/AllMemTarzan' className="on">한국어</Link>
                <Link to='/AllMemTarzanEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="allday project 꾸미기" />타잔<img src={MainH2Deco} alt="allday project 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                다양한 생각과<br />
                즐거움 마음을 가지고<br />
                여러분을 찾아 갈게요!</p>
            <img src={All_mm_Tarzan_img} alt="타잔 이미지" className='tri_mm_s1_img all_mm_tarzan_img' />
            <table className='tri_mm_s1_intropa_tb all_mm_tarzan_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2002년 9월 27일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>179cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>래퍼, 댄서</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>끼끼</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>밝음</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
