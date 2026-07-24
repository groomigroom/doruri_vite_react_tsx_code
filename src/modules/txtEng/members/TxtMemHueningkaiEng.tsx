import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../txt/members/TxtMemHueningkai.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Txt_mm_Hueningkai_img from '../../txt/main/img/txt_m_mem_hueningkai.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TxtMemHueningkaiEng() {
    return (
        <div className="txt_mm_hueningkai_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TxtMemHueningkai'>한국어</Link>
                <Link to='/TxtMemHueningkaiEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="txt deco" />Huening Kai<img src={MainH2Deco} alt="txt deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Without a lie<br />
                I'll prepare well<br />
                I'll be back to you!</p>
            <img src={Txt_mm_Hueningkai_img} alt="Huening Kai image" className='tri_mm_s1_img txt_mm_hueningkai_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>August 14, 2002</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>183cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Hyuningee</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>playing musical instruments</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>space out</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td>
                            <p>ISTP</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>thoughtfulness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );
}

