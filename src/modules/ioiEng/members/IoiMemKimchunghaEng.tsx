import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../ioi/members/IoiMemKimchungha.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ioi_m_MemKimchungha_img from '../../ioi/main/img/ioi_m_mem_Kimchungha.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemKimchunghaEng() {
    EngPage('en', 'ko');

    return (
        <div className="ioi_mm_kimchungha_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IoiMemKimchungha'>한국어</Link>
                <Link to='/IoiMemKimchunghaEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />CHUNG HA<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll play the song<br />
                I've been<br />
                dreaming of!</p>
            <img src={Ioi_m_MemKimchungha_img} alt="CHUNG HA 이미지" className='tri_mm_s1_img ioi_mm_kimchungha_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>Februry 9, 1996</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>161cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Godchungha</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>main dancer</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>inhibition</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};
