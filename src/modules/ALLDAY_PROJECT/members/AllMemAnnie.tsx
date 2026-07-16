import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './AllMemAnnie.css';

import Menu from '../../Menu';

import All_mm_Annie_img from '../main/img/allday_m_mem_Annie.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AllMemAnnie() {
    return (
        <div className="all_mm_annie_full">
            <Menu />
            <section className="home_translate">
                <Link to='/AllMemAnnie' className="on">한국어</Link>
                <Link to='/AllMemAnnieEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="allday project 꾸미기" />애니<img src={MainH2Deco} alt="allday project 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                멤버들의 다양한<br />
                의견을 존중하며<br />
                잘 활동해 볼게요!</p>
            <img src={All_mm_Annie_img} alt="애니 이미지" className='tri_mm_s1_img all_mm_annie_img' />
            <table className='tri_mm_s1_intropa_tb all_mm_annie_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2002년 1월 23일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>168cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>래퍼</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESTJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>애니언니</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>성실함</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
