import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../ioi/members/IoiMemJugyulgyoung.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ioi_m_MemJugyulgyoung_img from '../../ioi/main/img/ioi_m_mem_Jugyulgyung.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemJugyulgyoungEng() {
    EngPage('en', 'ko');

    return (
        <div className="ioi_mm_jugyulgyoung_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IoiMemJugyulgyoung'>한국어</Link>
                <Link to='/IoiMemJugyulgyoungEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />Zhou Jieqiong<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'm going to work<br />
                hard without<br />
                giving up!</p>
            <img src={Ioi_m_MemJugyulgyoung_img} alt="Zhou Jieqiong" className='tri_mm_s1_img ioi_mm_jugyulgyoung_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>December 16, 1998</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>166.5cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Juyeboss</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>sub vocal</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>activeness</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

