import '../../triples/members/TriplesMemS1.css';
import './DayMemDowoon.css';

import Menu from '../../Menu';

import Day_mm_dowoon_img from '../main/img/day6_m_mem_Dowoon.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function DayMemDowoon() {
    return (
        <div className="day_mm_dowoon_full">
            <Menu />
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="DAY6 꾸미기" />도운<img src={MainH2Deco} alt="DAY6 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                오늘도 열심히<br />
                고민하며 좋은<br />
                음악 준비할게요!</p>
            <img src={Day_mm_dowoon_img} alt="도운 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1995년 8월 25일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>177.5cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>드럼</p></td>
                    </tr>
                    <tr>
                        <td><p>캐릭터</p></td>
                        <td><p>DON</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>강아지</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>윤돈</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>x</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>조금 예민함</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );

};

