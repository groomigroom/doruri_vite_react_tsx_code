import { Link } from 'react-router-dom';
import { EngPage } from '../../../HomeEng/EngPage';

import '../../../triples/main/TriplesMain.css';
import '../../../triples/units/Aria/TriplesAriaMain.css';

import MenuEng from '../../../HomeEng/MenuEng';
import FooterPartEng from '../../../FooterPartEng';

// import TriplesAria_m_logo from './img/TriplesAria_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
// import TriplesAria_m_img from './img/TriplesAria_m_img.jpg';

// import TriplesAria_m_S3_img from './img/TriplesAria_m_S3_img.jpg';
// import TriplesAria_m_S4_img from './img/TriplesAria_m_S4_img.jpg';
// import TriplesAria_m_S9_img from './img/TriplesAria_m_S9_img.jpg';
// import TriplesAria_m_S10_img from './img/TriplesAria_m_S10_img.jpg';
// import TriplesAria_m_S13_img from './img/TriplesAria_m_S13_img.jpg';

//191919

export default function TriplesAriaMainEng() {
    EngPage('en', 'ko');

    return (
        <div className='tri_ari_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesAriaMain'>한국어</Link>
                <Link to='/TriplesAriaMainEng' className="on">English</Link>
            </section>
            <img src='' alt="tri_Aria logo" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_Aria deco" />Aria<img src={MainH2Deco} alt="tri_Aria deco" /></h2>
            <p className='tri_m_intropp'>
                Even if the weather is gloomy,<br />
                let&apos;s work hard and try<br />
                anything together with &apos;Aria&apos;!
            </p>
            <img src='' className='tri_m_img tri_ari_m_img' alt='tri_ari' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ members ▪</h2>
            <section className='tri_m_mem_tr_full tri_ari_m_mem_tr_full'>
                <section className='tri_ari_m_mem_tr3'>
                    <Link to='/TriplesMemS3Eng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Lee Jiwoo" />
                            <div>
                                <h4>Lee Jiwoo</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS4Eng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Kim Chaeyeon" />
                            <div>
                                <h4>Kim Chaeyeon</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS9Eng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Kaede" />
                            <div>
                                <h4>Kaede</h4>
                            </div>
                        </article>
                    </Link>

                </section>

                <section className='tri_ari_m_mem_tr2'>
                    <Link to='/TriplesMemS10Eng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Seo Dahyun" />
                            <div>
                                <h4>Seo Dahyun</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS13Eng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Nien" />
                            <div>
                                <h4>Nien</h4>
                            </div>
                        </article>
                    </Link>

                </section>

            </section>
            <FooterPartEng FooterPartEngText='ⓒ Modhaus' />
        </div>
    );
};
