import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../ioi/members/IoiMemImnayoung.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Ioi_m_MemImnayoung_img from '../../ioi/main/img/ioi_m_mem_Imnayoung.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemImnayoungEng() {
    EngPage('en', 'ko');

    return (
        <div className="ioi_mm_imnayoung_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IoiMemImnayoung'>한국어</Link>
                <Link to='/IoiMemImnayoungEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />Lim Na Young<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll come back<br />
                to you with my<br />
                unique personality!</p>
            <img src={Ioi_m_MemImnayoung_img} alt="Lim Na Young" className='tri_mm_s1_img ioi_mm_imnayoung_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>December 18, 1995</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>171cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Dolnayoung</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>leader</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>bright?</p></td>
                    </tr>
                </tbody>
            </table>

            <FooterPartEng FooterPartEngText='Independent' />
        </div>
    );
};

