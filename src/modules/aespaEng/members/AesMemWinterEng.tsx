import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../aespa/members/AesMemWinter.css';

import MenuEng from '../../HomeEng/MenuEng';

import aes_mm_winter_img from '../../aespa/main/img/aespa_m_mem_Winter.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AesMemWinterEng() {
    return (
        <div className="aes_mm_winter_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/AesMemWinter'>한국어</Link>
                <Link to='/AesMemWinterEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="aespa deco" />Winter<img src={MainH2Deco} alt="aespa deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will sing<br />
                with joy and<br />
                come to you!</p>
            <img src={aes_mm_winter_img} alt="Winter" className='tri_mm_s1_img txt_mm_beomgyu_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>January 1, 2001</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>163cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>vocal, dancer</p></td>
                    </tr>
                    <tr>
                        <td><p>combat skill</p></td>
                        <td><p>Armamenter</p></td>
                    </tr>
                    <tr>
                        <td><p>animal character</p></td>
                        <td><p>Mungtaengee</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td>
                            <p>Winteree</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>bright</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );

};

