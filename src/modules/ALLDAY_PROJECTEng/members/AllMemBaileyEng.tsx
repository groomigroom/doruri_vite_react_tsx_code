import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../ALLDAY_PROJECT/members/AllMemBailey.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import all_mm_bailey_img from '../../ALLDAY_PROJECT/main/img/allday_m_mem_Bailey.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AllMemBaileyEng() {
    EngPage('en', 'ko');

    return (
        <div className="all_mm_bailey_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/AllMemBailey'>한국어</Link>
                <Link to='/AllMemBaileyEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="allday project deco" />Bailey<img src={MainH2Deco} alt="allday project deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll prepare a bright<br />
                side and go<br />
                meet you guys!</p>
            <img src={all_mm_bailey_img} alt="Bailey" className='tri_mm_s1_img all_mm_bailey_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>Februry 24, 2004</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>163cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>??</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>dancer, rapper, vocal</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>neatness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ THEBLACKLABEL' />
        </div>
    );
}
