import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../aespa/members/AesMemKarina.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import aes_mm_karina_img from '../../aespa/main/img/aespa_m_mem_Karina.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AesMemKarinaEng() {
    EngPage('en', 'ko');

    return (
        <div className="aes_mm_karina_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/AesMemKarina'>한국어</Link>
                <Link to='/AesMemKarinaEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="aespa deco" />Karina<img src={MainH2Deco} alt="aespa deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will visit you<br />
                with a caring<br />
                and sweet heart!</p>
            <img src={aes_mm_karina_img} alt="Karina" className='tri_mm_s1_img txt_mm_beomgyu_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>April 11, 2000</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>168cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>leader, vocal, dancer, rapper</p></td>
                    </tr>
                    <tr>
                        <td><p>combat skill</p></td>
                        <td><p>Rocket Puncher</p></td>
                    </tr>
                    <tr>
                        <td><p>animal character</p></td>
                        <td><p>Carangee</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td>
                            <p>Jjimin</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>kindness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ SM ENTERTAINMENT' />
        </div>
    );

};
