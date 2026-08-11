import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../../DoruriDocumentTitle';

import '../../../triples/main/TriplesMain.css';
import './ArtmsOddEyeCircleMain.css';

import Menu from '../../../Menu';
import FooterPart from '../../../FooterPart';

// import Res_m_logo from './img/Res_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
// import Res_m_img from './img/rescene_m_rescene.jpg';

// import Res_m_MemWoni_img from './img/rescene_m_mem_Woni.jpg';
// import Res_m_MemLiv_img from './img/rescene_m_mem_Liv.jpg';
// import Res_m_MemMinami_img from './img/rescene_m_mem_Minami.jpg';
// import Res_m_MemMay_img from './img/rescene_m_mem_May.jpg';
// import Res_m_MemJena_img from './img/rescene_m_mem_Jena.jpg';

//191919

export default function ArtmsOddEyeCircleMain() {
    DoruriDocumentTitle('ODD EYE CIRCLE');

    return (
        <div className='art_OddEyeCircle_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/ArtmsOddEyeCircleMain' className="on">한국어</Link>
                <Link to='/ArtmsOddEyeCircleMainEng'>English</Link>
            </section>
            <img src='' alt="ARTMS 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="ODD EYE CIRCLE 꾸미기" />ODD EYE CIRCLE<img src={MainH2Deco} alt="ODD EYE CIRCLE 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;ODD EYE CIRCLE&apos;과 함께<br />
                달콤한 생각을<br />
                해보는건 어떠세요?
            </p>
            <img src='' className='tri_m_img' alt="ODD EYE CIRCLE" />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full art_OddEyeCircle_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/ArtMemKimlip' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="김립 이미지" />
                            <div>
                                <h4>김립</h4>
                            </div>
                        </article>
                    </Link>
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

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile art_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/ArtMemHeejin' className='tri_m_mem_a'>
                            <img src='' alt="희진 이미지" />
                            <h4>희진</h4>
                        </Link>
                        <Link to='/ArtMemHaseul' className='tri_m_mem_a'>
                            <img src='' alt="하슬 이미지" />
                            <h4>하슬</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/ArtMemKimlip' className='tri_m_mem_a'>
                            <img src='' alt="김립 이미지" />
                            <h4>김립</h4>
                        </Link>
                        <Link to='/ArtMemJinsoul' className='tri_m_mem_a'>
                            <img src='' alt="진솔 이미지" />
                            <h4>진솔</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/ArtMemChoerry' className='tri_m_mem_a'>
                            <img src='' alt="최리 이미지" />
                            <h4>최리</h4>
                        </Link>
                    </section>
                </section>

            </section>

            <FooterPart FooterPartText='ⓒ ㈜모드하우스' />
        </div>
    );
};
