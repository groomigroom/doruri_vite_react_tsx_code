import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../Stray_Kids/members/StrayMemLino.css';

import MenuEng from '../../HomeEng/MenuEng';

import Str_mm_lino_img from '../../Stray_Kids/main/img/stray_m_mem_Lino.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function StrayMemLinoEng() {
    return (
        <div className="str_mm_lino_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/StrayMemLino'>한국어</Link>
                <Link to='/StrayMemLinoEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids deco" />Lee Know<img src={MainH2Deco} alt="Stray Kids deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                We will come to you<br />
                with warm hearts<br />
                and fun hearts!</p>
            <img src={Str_mm_lino_img} alt="Lee Know" className='tri_mm_s1_img' />
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

