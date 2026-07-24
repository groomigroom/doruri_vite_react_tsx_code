import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../txt/members/TxtMemSubin.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Txt_mm_Subin_img from '../../txt/main/img/txt_m_mem_subin.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TxtMemSubinEng() {
    return (
        <div className="txt_mm_subin_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TxtMemSubin'>한국어</Link>
                <Link to='/TxtMemSubinEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="txt deco" />Soobin<img src={MainH2Deco} alt="txt deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will approach you with<br />
                both confidence and<br />
                careful consideration!</p>
            <img src={Txt_mm_Subin_img} alt="Soobin image" className='tri_mm_s1_img txt_mm_subin_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>December 5, 2000</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>186cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Soob</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Reading books</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>space out</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>Leader</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td>
                            <p>ISFP</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>Have determination</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );
}

