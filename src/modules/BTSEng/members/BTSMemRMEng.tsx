import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../BTS/members/BTSMemRM.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

//import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BTSMemRMEng() {
    EngPage('en', 'ko');

    return (
        <div className="bts_mm_rm_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/BTSMemRM'>한국어</Link>
                <Link to='/BTSMemRMEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="BTS deco" />RM<img src={MainH2Deco} alt="BTS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Let's cheer up<br />
                on rainy days<br />
                with &apos;RM&apos;!
            </p>
            <img src='' alt="RM" className='tri_mm_s1_img' />
            {/* 아래 내용 찾아서 하기 */}
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>September 12, 1994</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>181cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>leader, main rapper</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Leader rapper</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>emotional</p></td>
                    </tr>
                </tbody>
            </table>

            <FooterPartEng FooterPartEngText='ⓒ BIGHIT MUSIC' />
        </div>
    );
};
