import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../tws/main/TwsMain.css';

import MenuEng from '../../HomeEng/MenuEng';

import Tws_m_logo from '../../tws/main/img/Tws_m_logo.svg';
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

export default function TwsMainEng() {
    return (
        <div className='tws_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/TwsMain'>한국어</Link>
                <Link to='/TwsMainEng' className="on">English</Link>
            </section>
            <img src={Tws_m_logo} alt="TWS logo" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="TWS deco" />TWS<img src={MainH2Deco} alt="TWS deco" /></h2>
            <p className='tri_m_intropp'>
                Twenty four seven<br />
                Let's find new<br />
                possibilities with &apos;TWS&apos;!</p>
            <img src='' className='tri_m_img' alt='tws' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='tri_m_mem_tr_full tws_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TwsMemSinyuEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Shinyu" />
                            <h4>Shinyu</h4>
                        </article>
                    </Link>
                    <Link to='/TwsMemDohunEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Dohoon" />
                            <h4>Dohoon</h4>
                        </article>
                    </Link>
                    <Link to='/TwsMemYoungjaeEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Youngjae" />
                            <h4>Youngjae</h4>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TwsMemHanjinEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Hanjin" />
                            <h4>Hanjin</h4>
                        </article>
                    </Link>
                    <Link to='/TwsMemJihunEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Jihoon" />
                            <h4>Jihoon</h4>
                        </article>
                    </Link>
                    <Link to='/TwsMemGyungminEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Kyungmin" />
                            <h4>Kyungmin</h4>
                        </article>
                    </Link>

                </section>


            </section>


        </div>
    );
};


