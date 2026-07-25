import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../DAY6/members/DayMemWonpil.css';

import MenuEng from '../../HomeEng/MenuEng';

import Day_mm_wonpil_img from '../../DAY6/main/img/day6_m_mem_Wonpil.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function DayMemWonpilEng() {
    return (
        <div className="day_mm_wonpil_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/DayMemWonpil'>한국어</Link>
                <Link to='/DayMemWonpilEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="DAY6 deco" />Wonpil<img src={MainH2Deco} alt="DAY6 deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you<br />
                like an angel in a kind<br />
                and bright way!
            </p>
            <img src={Day_mm_wonpil_img} alt="Wonpil" className='tri_mm_s1_img' />
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

        </div>
    );

};

day6원필잉그멤
<tr className='tri_mm_s1_intropa_tb_tr1'>
<td><p>birth</p></td>
<td><p>April 28, 1994</p></td>
</tr>
<tr>
<td><p>height</p></td>
<td><p>176cm</p></td>
</tr>
<tr>
<td><p>blooe type</p></td>
<td><p>A</p></td>
</tr>
<tr>
<td><p>position</p></td>
<td><p>keyboard, synthesizer, vocal</p></td>
</tr>
<tr>
<td><p>animal character</p></td>
<td><p>PIL</p></td>
</tr>
<tr>
<td><p>symbolic animal</p></td>
<td><p>rabbit</p></td>
</tr>
<tr>
<td><p>nickname</p></td>
<td><p>Pilee</p></td>
</tr>
<tr>
<td><p>units</p></td>
<td>
<p>DAY6 (Even of Day)</p></td>
</tr>
<tr className='tri_mm_s1_intropa_tb_tr9'>
<td><p>character</p></td>
<td><p>kindness</p></td>
</tr>