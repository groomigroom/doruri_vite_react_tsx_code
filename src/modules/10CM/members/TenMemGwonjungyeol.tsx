import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './TenMemGwonjungyeol.css';

import Menu from '../../Menu';

import Ten_mm_gwonjungyeol_img from '../main/img/10cm_m_mem_Gwonjungyeol.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TenMemGwonjungyeol() {
    return (
        <div className="ten_mm_gwonjungyeol_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TenMemGwonjungyeol' className="on">한국어</Link>
                <Link to='/TenMemGwonjungyeolEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="10CM 꾸미기" />권정열<img src={MainH2Deco} alt="10CM 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                부드럽고<br />
                개성있는 노래로<br />
                여러분을 찾아 갈게요!</p>
            <img src={Ten_mm_gwonjungyeol_img} alt="권정열 이미지" className='tri_mm_s1_img ten_mm_gwonjungyeol_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1983년 3월 1일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>172cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>요정열</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션 1</p></td>
                        <td><p>보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션 2</p></td>
                        <td><p>기타</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP-T</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td>
                            <p>라면</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>??</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};

