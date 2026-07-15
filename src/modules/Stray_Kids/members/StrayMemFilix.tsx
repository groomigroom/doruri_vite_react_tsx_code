import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './StrayMemFilix.css';

import Menu from '../../Menu';

import Str_mm_filix_img from '../main/img/stray_m_mem_Filix.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function StrayMemFilix() {
    return (
        <div className="str_mm_filix_full">
            <Menu />
            <section className="home_translate">
                <Link to='/StrayMemFilix' className="on">한국어</Link>
                <Link to='/StrayMemFilixEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" />필릭스<img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                긍정적으로<br />
                많은 생각을 해보며<br />
                &apos;Stray Kids&apos; 활동을 준비 할게요!</p>
            <img src={Str_mm_filix_img} alt="필릭스 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2000년 9월 15일</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>AB형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>용복이</p></td>
                    </tr>
                    <tr>
                        <td><p>SKZOO</p></td>
                        <td><p>뽁아리</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>병아리</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td>
                            <p>댄서</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>긍정적임</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
