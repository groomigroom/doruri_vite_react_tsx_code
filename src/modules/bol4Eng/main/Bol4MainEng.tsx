import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../10CM/main/TenCMMain.css';
import './Bol4Main.css'

import Menu from '../../Menu';

import Bol_m_logo from './img/Bol_m_logo.png';
import MainH2Deco from '../../img/main_h2_deco.png';
import Bol_m_img from './img/bol4_m_mem_Anjiyoung.jpg';

//191919
//ffffff

export default function Bol4MainEng() {
    return (
        <div className='bol_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/Bol4Main'>한국어</Link>
                <Link to='/Bol4MainEng' className="on">English</Link>
            </section>
            <img src={Bol_m_logo} alt="BOL4 logo" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="BOL4 deco" />BOL4<img src={MainH2Deco} alt="BOL4 deco" /></h2>
            <p className='tri_m_intropp'>
                #####<br />
                하루에 하루만 더<br />
                &apos;투모로우바이투게더&apos;와 함께 힘내 보아요.</p>
            <img src={Bol_m_img} className='tri_m_img txt_m_img' alt='BOL4' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='tri_m_mem_tr_full ten_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/BolMemAnjiyoungEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Bol_m_img} alt="An Jiyeong" />
                            <h4>An Jiyeong</h4>
                        </article>
                    </Link>
                </section>


            </section>


        </div>
    );
};





