import '../../triples/members/TriplesMemS1.css';
import './DayMemWonpil.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Day_mm_wonpil_img from '../main/img/day6_m_mem_Wonpil.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function DayMemWonpil() {
    return (
        <div className="day_mm_wonpil_full">
            <Menu />
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="DAY6 꾸미기" />원필<img src={MainH2Deco} alt="DAY6 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                다정하고 밝게<br />
                천사같이<br />
                여러분께 찾아 갈게요!
            </p>
            <img src={Day_mm_wonpil_img} alt="원필 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1994년 4월 28일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>176cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>키보드, 신디사이저, 보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>캐릭터</p></td>
                        <td><p>PIL</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>토끼</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>필이</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>DAY6 &#40;Even of Day&#41;</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>다정함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ JYP엔터테인먼트' />
        </div>
    );

};

