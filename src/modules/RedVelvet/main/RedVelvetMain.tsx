import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './RedVelvetMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

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

export default function RedVelvetMain() {
    return (
        <div className='red_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/RedVelvetMain' className="on">한국어</Link>
                <Link to='/RedVelvetMainEng'>English</Link>
            </section>
            <img src='' alt="Red Velvet 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="Red Velvet 꾸미기" />Red Velvet<img src={MainH2Deco} alt="Red Velvet 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                #####
                &apos;RESCENE&apos;와 함께<br />
                좋은 곳으로<br />
                Runaway!
            </p>
            <img src='' className='tri_m_img' alt="Red Velvet" />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full'>
                <section className='res_m_mem_tr3'>
                    <Link to='/RedMemIrene' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="아이린 이미지" />
                            <div>
                                <h4>아이린</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/RedMemSeulgi' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="슬기 이미지" />
                            <div>
                                <h4>슬기</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/RedMemWendy' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="웬디 이미지" />
                            <div>
                                <h4>웬디</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='res_m_mem_tr2'>
                    <Link to='/RedMemJoy' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="조이 이미지" />
                            <div>
                                <h4>조이</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/RedMemYeri' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="예리 이미지" />
                            <div>
                                <h4>예리</h4>
                            </div>
                        </article>
                    </Link>

                </section>


            </section>

            <FooterPart />
        </div>
    );
};


