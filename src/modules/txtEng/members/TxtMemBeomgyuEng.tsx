import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../txt/members/TxtMemBeomgyu.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Txt_mm_Beomgyu_img from '../../txt/main/img/txt_m_mem_beomgyu.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TxtMemBeomgyuEng() {
    return (
        <div className="txt_mm_beomgyu_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TxtMemBeomgyu'>한국어</Link>
                <Link to='/TxtMemBeomgyuEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="txt deco" />Beomgyu<img src={MainH2Deco} alt="txt deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Bright and lively<br />
                with a look on one's face<br />
                I'll be back to you!</p>
            <img src={Txt_mm_Beomgyu_img} alt="Beomgyu image" className='tri_mm_s1_img txt_mm_beomgyu_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>March 13, 2001</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>179cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>AB</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Bamgyu</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Guitar</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Talking</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td>
                            <p>INFP</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>Bright</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );
}

