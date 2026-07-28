import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../ioi/members/IoiMemJungcheyun.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Ioi_m_MemJungcheyun_img from '../../ioi/main/img/ioi_m_mem_Jungchaeyun.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemJungcheyunEng() {
    EngPage('en', 'ko');

    return (
        <div className="ioi_mm_jungcheyun_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IoiMemJungcheyun'>한국어</Link>
                <Link to='/IoiMemJungcheyunEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />Jung Chaeyeon<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll work hard and<br />
                come back to you<br />
                no matter what!</p>
            <img src={Ioi_m_MemJungcheyun_img} alt="Jung Chaeyeon" className='tri_mm_s1_img ioi_mm_jungcheyun_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>December 1, 1997</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>166cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Chan</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>sub vocal</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>confident?</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ BH ENTERTAINMENT' />
        </div>
    );
};
