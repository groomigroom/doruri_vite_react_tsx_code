import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/main/TriplesMain.css'
import '../../RedVelvet/main/RedVelvetMain.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

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

export default function RedVelvetMainEng() {
    EngPage('en', 'ko');

    return (
        <div className='red_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/RedVelvetMain'>한국어</Link>
                <Link to='/RedVelvetMainEng' className="on">English</Link>
            </section>
            <img src='' alt="Red Velvet 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="Red Velvet deco" />Red Velvet<img src={MainH2Deco} alt="Red Velvet deco" /></h2>
            <p className='tri_m_intropp'>
                Let&apos;s go somewhere<br />
                to find a star<br />
                with &apos;Red Velvet&apos;!
            </p>
            <img src='' className='tri_m_img' alt="Red Velvet" />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ members ▪</h2>
            <section className='tri_m_mem_tr_full red_m_mem_tr_full'>
                <section className='red_m_mem_tr3'>
                    <Link to='/RedMemIreneEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Irene" />
                            <div>
                                <h4>Irene</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/RedMemSeulgiEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Seulgi" />
                            <div>
                                <h4>Seulgi</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/RedMemWendyEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Wendy" />
                            <div>
                                <h4>Wendy</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='red_m_mem_tr2'>
                    <Link to='/RedMemJoyEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Joy" />
                            <div>
                                <h4>Joy</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/RedMemYeriEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Yeri" />
                            <div>
                                <h4>Yeri</h4>
                            </div>
                        </article>
                    </Link>

                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile red_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/RedMemIrene' className='tri_m_mem_a'>
                            <img src='' alt="아이린 이미지" />
                            <h4>아이린</h4>
                        </Link>
                        <Link to='/RedMemSeulgi' className='tri_m_mem_a'>
                            <img src='' alt="슬기 이미지" />
                            <h4>슬기</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/RedMemWendy' className='tri_m_mem_a'>
                            <img src='' alt="웬디 이미지" />
                            <h4>웬디</h4>
                        </Link>
                        <Link to='/RedMemJoy' className='tri_m_mem_a'>
                            <img src='' alt="조이 이미지" />
                            <h4>조이</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/RedMemYeri' className='tri_m_mem_a'>
                            <img src='' alt="예리 이미지" />
                            <h4>예리</h4>
                        </Link>
                    </section>
                </section>

            </section>

            <FooterPartEng FooterPartEngText='ⓒ SM ENTERTAINMENT' />
        </div>
    );
};
