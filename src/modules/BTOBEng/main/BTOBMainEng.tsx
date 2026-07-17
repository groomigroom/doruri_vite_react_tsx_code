import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../BTOB/main/BTOBMain.css';

import Menu from '../../Menu';

// import Tws_m_logo from './img/Tws_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import Tws_m_img from './img/tws_m_tws.jpg';

// import Tws_m_MemSinyu_img from './img/tws_m_mem_Sinyu.jpg';
// import Tws_m_MemDohun_img from './img/tws_m_mem_Dohun.jpg';
// import Tws_m_MemYoungjae_img from './img/tws_m_mem_Youngjae.jpg';
// import Tws_m_MemHanjin_img from './img/tws_m_mem_Hanjin.jpg';
// import Tws_m_MemJihun_img from './img/tws_m_mem_Jihun.jpg';
// import Tws_m_MemGyungmin_img from './img/tws_m_mem_Kyungmin.jpg';

//#191919
//#ffffff

export default function BTOBMainEng() {
    return (
        <div className='bto_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/BTOBMain'>한국어</Link>
                <Link to='/BTOBMainEng' className="on">English</Link>
            </section>
            <img src='' alt="BTOB logo" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="BTOB deco" />BTOB<img src={MainH2Deco} alt="BTOB deco" /></h2>
            <p className='tri_m_intropp'>
                Let&apos;s dream<br />
                together again<br />
                with &apos;BTOB&apos;!</p>
            <img src='' className='tri_m_img' alt='BTOB' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='tri_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/BtoMemSeoEunkwangEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Seo Eunkwang" />
                            <div>
                                <h4>Seo Eunkwang</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BtoMemLeeMinhyukEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Lee Minhyuk" />
                            <div>
                                <h4>Lee Minhyuk</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BtoMemLeeChangsubEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Lee Changsub" />
                            <div>
                                <h4>Lee Changsub</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/BtoMemLimHyunsikEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Lim Hyunsik" />
                            <div>
                                <h4>Lim Hyunsik</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BtoMemPenielEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Peniel" />
                            <div>
                                <h4>Peniel</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BtoMemYookSungjaeEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Yook Sungjae" />
                            <div>
                                <h4>Yook Sungjae</h4>
                            </div>
                        </article>
                    </Link>

                </section>


            </section>
            {/* 유닛있음 */}

        </div>
    );
};




