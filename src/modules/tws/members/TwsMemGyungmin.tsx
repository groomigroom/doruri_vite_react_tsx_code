import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './TwsMemGyungmin.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tws_mm_gyungmin_img from '../main/img/tws_m_mem_Kyungmin.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TwsMemGyungmin() {
    return (
        <div className="tws_mm_gyungmin_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TwsMemGyungmin' className="on">한국어</Link>
                <Link to='/TwsMemGyungminEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="TWS 꾸미기" />경민<img src={MainH2Deco} alt="TWS 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                다양한 아이디어를<br />
                제시하며 멤버들과<br />
                잘 활동해 볼게요!</p>
            <img src={Tws_mm_gyungmin_img} alt="경민 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb tws_mm_gyungmin_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2007년 10월 2일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>177cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>리드 보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INTP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>경탱이</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>활발함</p></td>
                    </tr>
                </tbody>
            </table>

            <FooterPart />
        </div>
    );
};
