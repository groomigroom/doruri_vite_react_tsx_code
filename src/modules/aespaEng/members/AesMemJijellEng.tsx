import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../aespa/members/AesMemJijell.css';

import MenuEng from '../../HomeEng/MenuEng';

import aes_mm_jijell_img from '../../aespa/main/img/aespa_m_mem_Jijel.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AesMemJijellEng() {
    EngPage('en', 'ko');

    return (
        <div className="aes_mm_jijell_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/AesMemJijell'>한국어</Link>
                <Link to='/AesMemJijellEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="aespa deco" />Giselle<img src={MainH2Deco} alt="aespa deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll be active as<br />
                an &apos;aespa&apos; member<br />
                with a happy heart!</p>
            <img src={aes_mm_jijell_img} alt="Giselle" className='tri_mm_s1_img txt_mm_beomgyu_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>October 30, 2000</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>164cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>vocal, rapper</p></td>
                    </tr>
                    <tr>
                        <td><p>combat skill</p></td>
                        <td><p>Xenoglossy</p></td>
                    </tr>
                    <tr>
                        <td><p>animal character</p></td>
                        <td><p>Zelbelnyangee</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td>
                            <p>earthjelly</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>activeness</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );

};

