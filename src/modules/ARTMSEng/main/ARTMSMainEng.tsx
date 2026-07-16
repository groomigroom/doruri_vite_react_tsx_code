import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../ARTMS/main/ARTMSMain.css';

import MenuEng from '../../HomeEng/MenuEng';

// import Res_m_logo from './img/Res_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import Res_m_img from './img/rescene_m_rescene.jpg';

// import Res_m_MemWoni_img from './img/rescene_m_mem_Woni.jpg';
// import Res_m_MemLiv_img from './img/rescene_m_mem_Liv.jpg';
// import Res_m_MemMinami_img from './img/rescene_m_mem_Minami.jpg';
// import Res_m_MemMay_img from './img/rescene_m_mem_May.jpg';
// import Res_m_MemJena_img from './img/rescene_m_mem_Jena.jpg';

//191919
//ffffff

export default function ARTMSMainEng() {
    return (
        <div className='art_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/ARTMSMain'>한국어</Link>
                <Link to='/ARTMSMainEng' className="on">English</Link>
            </section>
            <img src='' alt="ARTMS 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="ARTMS deco" />ARTMS<img src={MainH2Deco} alt="ARTMS deco" /></h2>
            <p className='tri_m_intropp'>
                Fly away<br />
                one more time<br />
                with &apos;ARTMS&apos;!
            </p>
            <img src='' className='tri_m_img' alt="ARTMS" />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='tri_m_mem_tr_full'>
                <section className='res_m_mem_tr3'>
                    <Link to='/ArtMemHeejinEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="HeeJin" />
                            <div>
                                <h4>HeeJin</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/ArtMemHaseulEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="HaSeul" />
                            <div>
                                <h4>HaSeul</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/ArtMemKimlipEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Kim Lip" />
                            <div>
                                <h4>Kim Lip</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='res_m_mem_tr2'>
                    <Link to='/ArtMemJinsoulEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="JinSoul" />
                            <div>
                                <h4>JinSoul</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/ArtMemChoerryEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Choerry" />
                            <div>
                                <h4>Choerry</h4>
                            </div>
                        </article>
                    </Link>

                </section>


            </section>


        </div>
    );
};





