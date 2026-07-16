import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './AllMemWoochan.css';

import Menu from '../../Menu';

import All_mm_Woochan_img from '../main/img/allday_m_mem_Woochan.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AllMemWoochan() {
    return (
        <div className="all_mm_woochan_full">
            <Menu />
            <section className="home_translate">
                <Link to='/AllMemWoochan' className="on">한국어</Link>
                <Link to='/AllMemWoochanEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="allday project 꾸미기" />우찬<img src={MainH2Deco} alt="allday project 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                활발하고<br />
                밝은 모습으로<br />
                여러분을 만나러 갈게요!</p>
            <img src={All_mm_Woochan_img} alt="우찬 이미지" className='tri_mm_s1_img all_mm_woochan_img' />
            <table className='tri_mm_s1_intropa_tb all_mm_woochan_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2005년 1월 20일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>181cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>래퍼, 보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>산타</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>활발함</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
