import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../EpikHigh/members/EpiMemTablo.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

// import Txt_mm_Beomgyu_img from '../main/img/txt_m_mem_beomgyu.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function EpiMemTabloEng() {
    EngPage('en', 'ko');

    return (
        <div className="epi_mm_tablo_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/EpiMemTablo'>한국어</Link>
                <Link to='/EpiMemTabloEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="EpikHigh deco" />Tablo<img src={MainH2Deco} alt="EpikHigh deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Prepare anything with<br />
                the heart of dedicating<br />
                the bottom with &apos;Tablo&apos;!</p>
            <img src="" alt="Tablo" className='tri_mm_s1_img epi_mm_tablo_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>July 22, 1980</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>170cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>affectionate</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ Ours' />
        </div>
    );
};
