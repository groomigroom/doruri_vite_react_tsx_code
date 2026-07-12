import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS3.css';

import Menu from '../../Menu';

import Tri_mm_s3_img from '../main/img/tri_m_memS3.jpg'

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS3() {
    return (
        <div className="tri_mm_s3_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS3' className="on">한국어</Link>
                <Link to='/TriplesMemS3Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />이지우<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                저는 한가지 모양이 아닌<br />
                다양한 제 개성들을<br />
                보여 드릴게요!</p>
            <img src={Tri_mm_s3_img} alt="이지우 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2005년 10월 24일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>172.7cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>쥬</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>베이킹하기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>하키</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>마라탕</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>+&#40;KR&#41;ystal Eyes, Acid Eyes,<br />
                                EVOLution, Aria, ∞!, zenith
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>좋음</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};


