import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../10CM/main/TenCMMain.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ten_m_logo from '../../10CM/main/img/TenCM_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import Ten_m_img from './img/10cm_m_mem_Gwonjungyeol.jpg';

//000000

export default function TenCMMainEng() {
    return (
        <div className='ten_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/TenCMMain'>한국어</Link>
                <Link to='/TenCMMainEng' className="on">English</Link>
            </section>
            <img src={Ten_m_logo} alt="10CM 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="10CM deco" />10CM<img src={MainH2Deco} alt="10CM deco" /></h2>
            <p className='tri_m_intropp'>
                Even if there is no chance,<br />
                let's cheer up<br />
                today with &apos;10CM&apos;!
            </p>
            <img src='' className='tri_m_img ten_m_img' alt='10CM' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='tri_m_mem_tr_full ten_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TenMemGwonjungyeolEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Kwon Jeongyeol" />
                            <h4>Kwon Jeongyeol</h4>
                        </article>
                    </Link>
                </section>


            </section>


        </div>
    );
};





