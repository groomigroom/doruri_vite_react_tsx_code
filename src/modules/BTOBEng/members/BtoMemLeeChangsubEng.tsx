import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css'
import '../../BTOB/members/BtoMemLeeChangsub.css';

import Menu from '../../Menu';

// import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BtoMemLeeChangsubEng() {
    EngPage('en', 'ko');

    return (
        <div className="bto_mm_leechangsub_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BtoMemLeeChangsub'>한국어</Link>
                <Link to='/BtoMemLeeChangsubEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="BTOB deco" />Lee Changsub<img src={MainH2Deco} alt="BTOB deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Fly high<br />
                with<br />
                &apos;Lee Changsub&apos;!
            </p>
            {/* 이미지랑 테이블하기 */}
            <img src='' alt="Lee Changsub" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>Februry 26, 1991</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>173.5cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>unit</p></td>
                        <td><p>BTOB-BLUE, BTOB 4U</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>lead vocal</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Hengsub</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>seriousness</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};

