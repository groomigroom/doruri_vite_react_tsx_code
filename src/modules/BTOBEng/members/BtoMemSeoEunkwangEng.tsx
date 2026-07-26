import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../BTOB/members/BtoMemSeoEunkwang.css';

import Menu from '../../Menu';

// import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BtoMemSeoEunkwangEng() {
    return (
        <div className="bto_mm_seoeunkwang_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BtoMemSeoEunkwang'>한국어</Link>
                <Link to='/BtoMemSeoEunkwangEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="BTOB deco" />Seo Eunkwang<img src={MainH2Deco} alt="BTOB deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Let&apos;s find<br />
                greatest moment<br />
                with &apos;Seo Eunkwang&apos;!
            </p>
            {/* 이미지랑 테이블하기 */}
            <img src='' alt="Seo Eunkwang" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>November 22, 1990</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>171cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>unit</p></td>
                        <td><p>BTOB-BLUE, BTOB 4U, 90TAN</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>leader, main vocal</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Silver light</p></td>
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


