import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../bol4/members/BolMemAnjiyoung.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

// import Txt_mm_Beomgyu_img from '../main/img/txt_m_mem_beomgyu.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BolMemAnjiyoungEng() {
    EngPage('en', 'ko');

    return (
        <div className="bol_mm_anjiyoung_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/BolMemAnjiyoung'>한국어</Link>
                <Link to='/BolMemAnjiyoungEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="bol4 deco" />An Jiyeong<img src={MainH2Deco} alt="bol4 deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you<br />
                with songs that<br />
                contain my sensitivity!</p>
            <img src="" alt="An Jiyeong" className='tri_mm_s1_img txt_mm_beomgyu_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>September 14, 1995</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>165cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>main vocal</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Jyung</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>an abundance of sensitivity</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ Kanverse' />
        </div>
    );

};
