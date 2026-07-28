import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../BTOB/members/BtoMemYookSungjae.css';

import Menu from '../../Menu';

// import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BtoMemYookSungjaeEng() {
    EngPage('en', 'ko');

    return (
        <div className="bto_mm_yooksungjae_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BtoMemYookSungjae'>한국어</Link>
                <Link to='/BtoMemYookSungjaeEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="BTOB deco" />Yook Sungjae<img src={MainH2Deco} alt="BTOB deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Let&apos;s keep<br />
                good memories<br />
                with &apos;Yook Sungjae&apos;!
            </p>
            {/* 이미지랑 테이블하기 */}
            <img src='' alt="Yook Sungjae" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>May 2, 1995</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>180cm</p></td>
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
                        <td><p>sub vocal</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENTP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Yookjalddo</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>good-naturedness</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};

