import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/members/TriplesMemS1.css'
import './BtoMemLeeChangsub.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Btob_m_LeeChangsub_img from '../main/img/Bto_mm_Leechangsub_img.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BtoMemLeeChangsub() {
    DoruriDocumentTitle('이창섭');

    return (
        <div className="bto_mm_leechangsub_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BtoMemLeeChangsub' className="on">한국어</Link>
                <Link to='/BtoMemLeeChangsubEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'>
                <img src={MainH2Deco} alt="BTOB 꾸미기" />이창섭<img src={MainH2Deco} alt="BTOB 꾸미기" />
            </h2>
            <p className='tri_mm_s1_intropp'>
                &apos;이창섭&apos;과 함께<br />
                높이높이<br />
                날아올라라!
            </p>
            {/* 이미지랑 테이블하기 */}
            <img src={Btob_m_LeeChangsub_img} alt="이창섭 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb bto_mm_leechangsub_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1991년 2월 26일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>173.5cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>비투비-블루, 비투비 포유</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>리드보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>흥섭</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>진중함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 판타지오' />

        </div>
    );
};

