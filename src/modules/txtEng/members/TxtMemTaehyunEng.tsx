import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../txt/members/TxtMemTaehyun.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Txt_mm_Taehyun_img from '../../txt/main/img/txt_m_mem_taehyun.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TxtMemTaehyunEng() {
    return (
        <div className="txt_mm_taehyun_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TxtMemTaehyun'>한국어</Link>
                <Link to='/TxtMemTaehyunEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="txt deco" />Taehyun<img src={MainH2Deco} alt="txt deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I take good care of the members<br />
                in one's sober senses<br />
                I'll be back to you!</p>
            <img src={Txt_mm_Taehyun_img} alt="Taehyun img" className='tri_mm_s1_img txt_mm_taehyun_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>Februry 5, 2002</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>177cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Ganggemjjok</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>boxing</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>magic</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td>
                            <p>ESTP</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>smartness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );
}

