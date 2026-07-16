import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './ARTMSMain.css';

import Menu from '../../Menu';

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

export default function ARTMSMain() {
    return (
        <div className='res_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/ARTMSMain' className="on">한국어</Link>
                <Link to='/ARTMSMainEng'>English</Link>
            </section>
            <img src='' alt="ARTMS 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="ARTMS 꾸미기" />ARTMS<img src={MainH2Deco} alt="ARTMS 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;ARTMS&apos;와 함께<br />
                다시 한번 더<br />
                Fly Away!
            </p>
            <img src='' className='tri_m_img' alt="rescene" />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full'>
                <section className='res_m_mem_tr3'>
                    <Link to='/ArtMemHeejin' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="희진 이미지" />
                            <div>
                                <h4>희진</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/ArtMemHaseul' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="하슬 이미지" />
                            <div>
                                <h4>하슬</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/ArtMemKimlip' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="김립 이미지" />
                            <div>
                                <h4>김립</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='res_m_mem_tr2'>
                    <Link to='/ArtMemJinsoul' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="진솔 이미지" />
                            <div>
                                <h4>진솔</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/ArtMemChoerry' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="최리 이미지" />
                            <div>
                                <h4>최리</h4>
                            </div>
                        </article>
                    </Link>

                </section>


            </section>


        </div>
    );
};



