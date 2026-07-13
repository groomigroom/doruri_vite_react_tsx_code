import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../10CM/members/TenMemGwonjungyeol.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ten_mm_gwonjungyeol_img from '../main/img/10cm_m_mem_Gwonjungyeol.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TenMemGwonjungyeolEng() {
    return (
        <div className="ten_mm_gwonjungyeol_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TenMemGwonjungyeol'>한국어</Link>
                <Link to='/TenMemGwonjungyeolEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="10CM deco" />Kwon Jeongyeol<img src={MainH2Deco} alt="10CM deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll go to you<br />
                with soft and<br />
                unique songs!</p>
            <img src={Ten_mm_gwonjungyeol_img} alt="Kwon Jeongyeol" className='tri_mm_s1_img ten_mm_gwonjungyeol_img' />
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



