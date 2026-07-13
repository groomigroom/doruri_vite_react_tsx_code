import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './AllMemYoungseo.css';

import Menu from '../../Menu';

import All_mm_youngseo_img from '../main/img/allday_m_mem_Youngseo.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AllMemYoungseo() {
    return (
        <div className="all_mm_youngseo_full">
            <Menu />
            <section className="home_translate">
                <Link to='/AllMemYoungseo' className="on">한국어</Link>
                <Link to='/AllMemYoungseoEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="allday project 꾸미기" />영서<img src={MainH2Deco} alt="allday project 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>24명은 너무 많지 않아요?<br />
                그리고... 그리고... 그리고...<br />
                더 열심히 더 열심히</p>
            <img src={All_mm_youngseo_img} alt="영서 이미지" className='tri_mm_s1_img all_mm_youngseo_img' />
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
}
