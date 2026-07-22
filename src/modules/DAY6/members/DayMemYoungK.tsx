import '../../triples/members/TriplesMemS1.css';
import './DayMemYoungK.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Day_mm_youngk_img from '../main/img/day6_m_mem_Youngk.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function DayMemYoungK() {
    return (
        <div className="day_mm_youngk_full">
            <Menu />
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="DAY6 꾸미기" />Young K<img src={MainH2Deco} alt="DAY6 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                성실하게 노력하며<br />
                음악으로<br />
                여러분께 찾아 갈게요!
            </p>
            <img src={Day_mm_youngk_img} alt="Young K 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1993년 12월 19일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>180.2cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>베이스, 보컬, 랩, 일렉트릭 기타</p></td>
                    </tr>
                    <tr>
                        <td><p>캐릭터</p></td>
                        <td><p>KE</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>여우</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>토롸너</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>DAY6 &#40;Even of Day&#41;</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>성실함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );

};
