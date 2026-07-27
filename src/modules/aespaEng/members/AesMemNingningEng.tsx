import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../aespa/members/AesMemNingning.css';

import MenuEng from '../../HomeEng/MenuEng';

import aes_mm_ningning_img from '../../aespa/main/img/aespa_m_mem_Ningning.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AesMemNingningEng() {
    EngPage('en', 'ko');

    return (
        <div className="aes_mm_ningning_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/AesMemNingning'>한국어</Link>
                <Link to='/AesMemNingningEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="aespa deco" />Ningning<img src={MainH2Deco} alt="aespa deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll show you<br />
                my personality<br />
                honestly!</p>
            <img src={aes_mm_ningning_img} alt="Ningning" className='tri_mm_s1_img txt_mm_beomgyu_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>October 23, 2002</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>161cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>vocal</p></td>
                    </tr>
                    <tr>
                        <td><p>combat skill</p></td>
                        <td><p>E.D Hacker</p></td>
                    </tr>
                    <tr>
                        <td><p>animal character</p></td>
                        <td><p>Rue</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td>
                            <p>Ning</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>frankness</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );

};

