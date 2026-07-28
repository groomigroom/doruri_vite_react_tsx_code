import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../BTOB/members/BtoMemLeeMinhyuk.css';

import Menu from '../../Menu';

// import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BtoMemLeeMinhyukEng() {
    EngPage('en', 'ko');

    return (
        <div className="bto_mm_leeminhyuk_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BtoMemLeeMinhyuk'>한국어</Link>
                <Link to='/BtoMemLeeMinhyukEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="BTOB deco" />Lee Minhyuk<img src={MainH2Deco} alt="BTOB deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Pedal down,<br />
                vroom-vroom<br />
                with &apos;Lee Minhyuk&apos;!
            </p>
            {/* 이미지랑 테이블하기 */}
            <img src='' alt="Lee Minhyuk" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>November 29, 1990</p></td>
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
                        <td><p>BTOB 4U, 90TAN</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>main rapper</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISTJ</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Heotaramzzi</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>meticulousness</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};


