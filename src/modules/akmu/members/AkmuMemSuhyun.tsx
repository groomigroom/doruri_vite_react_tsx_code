import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './AkmuMemSuhyun.css';

import Menu from '../../Menu';

import akmu_mm_suhyun_img from '../main/img/aknu_m_suhyun.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AkmuMemSuhyun() {
    return (
        <div className="akmu_mm_suhyun_full">
            <Menu />
            <section className="home_translate">
                <Link to='/AkmuMemSuhyun' className="on">한국어</Link>
                <Link to='/AkmuMemSuhyunEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="AKMU 로고 꾸미기" />이수현<img src={MainH2Deco} alt="AKMU 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                힘든 일이 있어도<br />
                잘 이겨내며<br />
                여러분을 찾아 갈게요!</p>
            <img src={akmu_mm_suhyun_img} alt="이수현 이미지" className='tri_mm_s1_img akmu_mm_suhyun_img' />
            <table className='tri_mm_s1_intropa_tb akm_mm_suhyun_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1999년 5월 4일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>165cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>이수</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td>
                            <p>ISTP</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>차분함</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};
