import '../../triples/members/TriplesMemS1.css';
import './DayMemSungjin.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Day_mm_sungjin_img from '../main/img/day6_m_mem_Sungjin.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function DayMemSungjin() {
    return (
        <div className="day_mm_sungjin_full">
            <Menu />
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="DAY6 꾸미기" />성진<img src={MainH2Deco} alt="DAY6 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                음악에 꽂혀서<br />
                그 마음을 담아서<br />
                여러분과 함께 할게요!
            </p>
            <img src={Day_mm_sungjin_img} alt="성진 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1993년 1월 16일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>178cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>리더, 보컬, 기타</p></td>
                    </tr>
                    <tr>
                        <td><p>캐릭터</p></td>
                        <td><p>BANG</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>곰</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>리다</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>x</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>순함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ JYP엔터테인먼트' />
        </div>
    );

};
