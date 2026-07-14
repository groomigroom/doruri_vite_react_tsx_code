import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './IoiMemJeonsomi.css';

import Menu from '../../Menu';

import Ioi_m_MemJeonsomi_img from '../main/img/ioi_m_mem_Jeonsomi.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemJeonsomi() {
    return (
        <div className="ioi_mm_jeonsomi_full">
            <Menu />
            <section className="home_translate">
                <Link to='/IoiMemJeonsomi' className="on">한국어</Link>
                <Link to='/IoiMemJeonsomiEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />전소미<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                무너지지 않는<br />
                멘탈을 지켜서<br />
                여러분을 찾아 갈게요!</p>
            <img src={Ioi_m_MemJeonsomi_img} alt="전소미 이미지" className='tri_mm_s1_img ioi_mm_jeonsomi_img' />
            <table className='tri_mm_s1_intropa_tb ioi_mm_jeonsomi_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2001년 3월 9일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>173cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>비타솜</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>센터</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>활발함</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};
