import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../Yena/main/YenaMain.css';

import MenuEng from '../../HomeEng/MenuEng';

// import Ten_m_logo from './img/TenCM_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import Ten_m_img from './img/10cm_m_mem_Gwonjungyeol.jpg';

//000000

export default function YenaMainEng() {
    return (
        <div className='yen_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/YenaMain'>한국어</Link>
                <Link to='/YenaMainEng' className="on">English</Link>
            </section>
            <img src='' alt="최예나 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="YENA" />YENA<img src={MainH2Deco} alt="YENA" /></h2>
            <p className='tri_m_intropp'>
                ca-ca-catch<br />
                my heart<br />
                with &apos;YENA&apos;!
            </p>
            <img src='' className='tri_m_img yen_m_img' alt='YENA' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 개인 프로필?? ▪</h2>
            <section className='tri_m_mem_tr_full yen_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TenMemGwonjungyeol' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="YENA" />
                            <div>
                                <h4>YENA</h4>
                            </div>
                        </article>
                    </Link>
                </section>


            </section>


        </div>
    );
};





