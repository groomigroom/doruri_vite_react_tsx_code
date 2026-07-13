import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS10.css';

import Menu from '../../Menu';

import Tri_mm_s10_img from '../main/img/tri_m_memS10.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS10() {
    return (
        <div className="tri_mm_s10_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS10' className="on">한국어</Link>
                <Link to='/TriplesMemS10Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />서다현<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                착하고 순수한<br />
                마음으로<br />
                여러분께 찾아 갈게요!</p>
            <img src={Tri_mm_s10_img} alt="서다현 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2003년 1월 8일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>160.1cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>소다</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>고양이 영상 보기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>뭐든지 맛있게 먹기</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>떡볶이</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                LOVElution, Aria, neptune</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>수줍음</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};














