import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../txt/members/TxtMemYeonjun.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Txt_mm_Yeonjun_img from '../../txt/members/yeonjun/img/txt_m_mem_yeonjun_7_23.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TxtMemYeonjunEng() {
    return (
        <div className="txt_mm_yeonjun_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TxtMemYeonjun'>한국어</Link>
                <Link to='/TxtMemYeonjunEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="txt deco" />Yeonjun<img src={MainH2Deco} alt="txt deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I hope you have<br />
                a cool day<br />
                like ice cream!</p>
            <img src={Txt_mm_Yeonjun_img} alt="Yeonjun img" className='tri_mm_s1_img txt_mm_yeonjun_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>September 9, 1999</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>181.5cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Yeonddo</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>dancing</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>dancing</p></td>
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
                        <td><p>activeness</p></td>
                    </tr>
                </tbody>
            </table>
            <Link to='/TxtMemYeonjun_7_22_endEng' className='tri_mm_s1_before_links'>see before page?</Link>
            <FooterPartEng />
        </div>
    );
}

