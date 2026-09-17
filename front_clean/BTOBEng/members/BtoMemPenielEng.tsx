import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../BTOB/members/BtoMemPeniel.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

// import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BtoMemPenielEng() {
    EngPage('en', 'ko');

    return (
        <div className="bto_mm_peniel_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/BtoMemPeniel'>한국어</Link>
                <Link to='/BtoMemPenielEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="BTOB deco" />Peniel<img src={MainH2Deco} alt="BTOB deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Let's solve<br />
                the problem<br />
                we found with &apos;Peniel&apos;!
            </p>
            {/* 이미지랑 테이블하기 */}
            <img src='' alt="Peniel" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>March 10, 1993</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>174cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>unit</p></td>
                        <td><p>BTOB 4U</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>lead rapper, main dancer</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESTP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Dongeni</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>good-naturedness</p></td>
                    </tr>
                </tbody>
            </table>

            <FooterPartEng FooterPartEngText='ⓒ BTOB Company' />
        </div>
    );
};
