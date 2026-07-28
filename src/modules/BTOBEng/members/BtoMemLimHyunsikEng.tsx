import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../BTOB/members/BtoMemLimHyunsik.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

// import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BtoMemLimHyunsikEng() {
    EngPage('en', 'ko');

    return (
        <div className="bto_mm_limhyunsik_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/BtoMemLimHyunsik'>한국어</Link>
                <Link to='/BtoMemLimHyunsikEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="BTOB deco" />Lim Hyunsik<img src={MainH2Deco} alt="BTOB deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Keep more with<br />
                &apos;Lim Hyunsik&apos; and<br />
                keep more!
            </p>
            {/* 이미지랑 테이블하기 */}
            <img src='' alt="Lim Hyunsik" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>March 7, 1992</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>174cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>unit</p></td>
                        <td><p>BTOB-BLUE</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>lead vocal</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INTP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Lim older alumnus</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>easygoing</p></td>
                    </tr>
                </tbody>
            </table>

            <FooterPartEng FooterPartEngText='ⓒ BTOB Company' />
        </div>
    );
};
