import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../EpikHigh/members/EpiMemMithra.css';

import MenuEng from '../../HomeEng/MenuEng';

// import Txt_mm_Beomgyu_img from '../main/img/txt_m_mem_beomgyu.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function EpiMemMithraEng() {
    return (
        <div className="epi_mm_mithra_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/EpiMemMithra'>한국어</Link>
                <Link to='/EpiMemMithranEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="EpikHigh deco" />Mithra<img src={MainH2Deco} alt="EpikHigh deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Let's think about various<br />
                things while running on a blank<br />
                sheet of paper with a pen!</p>
            <img src="" alt="Mithra" className='tri_mm_s1_img epi_mm_mithra_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>January 6, 1983</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>178cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>AB</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>affectionate</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

