import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './BtoMemSeoEunkwang.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BtoMemSeoEunkwang() {
    return (
        <div className="bto_mm_seoeunkwang_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BtoMemSeoEunkwang' className="on">한국어</Link>
                <Link to='/BtoMemSeoEunkwangEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="BTOB 꾸미기" />서은광<img src={MainH2Deco} alt="BTOB 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                &apos;서은광&apos;과 함께<br />
                Greatest moment를<br />
                찾아 봐요!
            </p>
            {/* 이미지랑 테이블하기 */}
            <img src='' alt="서은광 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2003년 8월 6일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>161cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>햄햄</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>좋아하는 영화 여러번 보기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>셀카찍기</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>아이스크림</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>+&#40;KR&#41;ystal Eyes, Acid Eyes, <br />
                                LOVElution, neptune</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>좋음</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />

        </div>
    );
};


비투비 서은광

<tr className='tri_mm_s1_intropa_tb_tr1'>
<td><p>출생</p></td>
<td><p>1990년 11월 22일</p></td>
</tr>
<tr>
<td><p>키</p></td>
<td><p>171cm</p></td>
</tr>
<tr>
<td><p>혈액형</p></td>
<td><p>A형</p></td>
</tr>
<tr>
<td><p>소속 유닛</p></td>
<td><p>비투비-블루, 비투비 포유, 구공탄</p></td>
</tr>
<tr>
<td><p>포지션</p></td>
<td><p>리더, 메인보컬</p></td>
</tr>
<tr>
<td><p>MBTI</p></td>
<td><p>ESFJ</p></td>
</tr>
<tr>
<td><p>별명</p></td>
<td><p>실버 라이트</p></td>
</tr>
<tr className='tri_mm_s1_intropa_tb_tr9'>
<td><p>성격</p></td>
<td><p>밝음</p></td>
</tr>
