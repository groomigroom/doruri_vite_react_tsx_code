import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/main/TriplesMain.css'
import './TwsMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tws_m_logo from './img/Tws_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import Tws_m_img from './img/tws_m_tws.jpg';

import Tws_m_MemSinyu_img from './img/tws_m_mem_Sinyu.jpg';
import Tws_m_MemDohun_img from './img/tws_m_mem_Dohun.jpg';
import Tws_m_MemYoungjae_img from './img/tws_m_mem_Youngjae.jpg';
import Tws_m_MemHanjin_img from './img/tws_m_mem_Hanjin.jpg';
import Tws_m_MemJihun_img from './img/tws_m_mem_Jihun.jpg';
import Tws_m_MemGyungmin_img from './img/tws_m_mem_Kyungmin.jpg';

import TwsNoTragedyAlbum_img from '../albums/img/TwsNoTragedyAlbum_img.jpg';

import TwsInstagram_img from '../../triples/main/img/triples_instagram_icon.png';
import TwsYoutube_img from '../../triples/main/img/triples_youtube_icon.png';

//#191919
//#ffffff

export default function TwsMain() {
    DoruriDocumentTitle('TWS');

    return (
        <div className='tws_m_full'>
            <header className='tri_m_header'>
                <Menu />
                <section className="home_translate">
                    <Link to='/TwsMain' className="on">한국어</Link>
                    <Link to='/TwsMainEng'>English</Link>
                </section>
            </header>
            <section className='tri_m_logo_section'>
                <img src={Tws_m_logo} alt="TWS 로고" />
            </section>
            <section className='tri_m_h2'>
                <h2><img src={MainH2Deco} alt="TWS 로고 꾸미기" />TWS<img src={MainH2Deco} alt="TWS 로고 꾸미기" /></h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    Twenty four seven<br />
                    'TWS'와 함께<br />
                    새로운 가능성을 찾아 봐요!</p>
            </section>
            <section className='tri_m_img'>
                <img src={Tws_m_img} alt='tws' className='tri_m_mem_imgborder' />
            </section>
            <section className='tri_m_h2'>
                <h2>▪ 멤버 ▪</h2>
            </section>
            <section className='tri_m_mem_tr_full'>
                <section className='tri_m_mem_tr3'>
                    <Link to='/TwsMemSinyu' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tws_m_MemSinyu_img} alt="신유 이미지" className='tri_m_mem_imgborder' />
                            <div className='tri_m_mem_imgborder' >
                                <h4>신유</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TwsMemDohun' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tws_m_MemDohun_img} alt="도훈 이미지" className='tri_m_mem_imgborder' />
                            <div className='tri_m_mem_imgborder' >
                                <h4>도훈</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TwsMemYoungjae' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tws_m_MemYoungjae_img} alt="영재 이미지" className='tri_m_mem_imgborder' />
                            <div className='tri_m_mem_imgborder' >
                                <h4>영재</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr3'>
                    <Link to='/TwsMemHanjin' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tws_m_MemHanjin_img} alt="한진 이미지" className='tri_m_mem_imgborder' />
                            <div className='tri_m_mem_imgborder' >
                                <h4>한진</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TwsMemJihun' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tws_m_MemJihun_img} alt="지훈 이미지" className='tri_m_mem_imgborder' />
                            <div className='tri_m_mem_imgborder' >
                                <h4>지훈</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TwsMemGyungmin' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tws_m_MemGyungmin_img} alt="경민 이미지" className='tri_m_mem_imgborder' />
                            <div className='tri_m_mem_imgborder' >
                                <h4>경민</h4>
                            </div>
                        </article>
                    </Link>

                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile tws_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TwsMemSinyu' className='tri_m_mem_a'>
                            <img src={Tws_m_MemSinyu_img} alt="신유 이미지" />
                            <h4>신유</h4>
                        </Link>
                        <Link to='/TwsMemDohun' className='tri_m_mem_a'>
                            <img src={Tws_m_MemDohun_img} alt="도훈 이미지" />
                            <h4>도훈</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TwsMemYoungjae' className='tri_m_mem_a'>
                            <img src={Tws_m_MemYoungjae_img} alt="영재 이미지" />
                            <h4>영재</h4>
                        </Link>
                        <Link to='/TwsMemHanjin' className='tri_m_mem_a'>
                            <img src={Tws_m_MemHanjin_img} alt="한진 이미지" />
                            <h4>한진</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TwsMemJihun' className='tri_m_mem_a'>
                            <img src={Tws_m_MemJihun_img} alt="지훈 이미지" />
                            <h4>지훈</h4>
                        </Link>
                        <Link to='/TwsMemGyungmin' className='tri_m_mem_a'>
                            <img src={Tws_m_MemGyungmin_img} alt="경민 이미지" />
                            <h4>경민</h4>
                        </Link>
                    </section>
                </section>

            </section>

            <section className='tri_m_h2'>
                <h2>▪ 이벤트 ▪</h2>
            </section>

            <section className='tri_m_mem_tr_full'>
                <section className='tri_m_mem_tr1'>
                    <Link to='/TwsEvent' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tws_m_img} alt="tws event" className='tri_m_mem_imgborder' />
                            <div className='tri_m_mem_imgborder' >
                                <h4>
                                    NO<br />
                                    TRAGEDY<br />
                                    이벤트
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <section className='tri_m_h2'>
                <h2>▪ 최신 앨범 ▪</h2>
            </section>

            <section className='tri_m_mem_tr_full'>
                <section className='tri_m_mem_tr1'>
                    <Link to='/TwsNoTragedyAlbum' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TwsNoTragedyAlbum_img} alt="TwsNoTragedyAlbum" className='tri_m_mem_imgborder' />
                            <div className='tri_m_mem_imgborder' >
                                <h4>
                                    NO<br />
                                    TRAGEDY
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <section className='tri_m_h2'>
                <h2>▪ sns ▪</h2>
            </section>
            <section className='tri_m_mem_tr_full'>
                <section className='tri_m_mem_tr2'>
                    <a href="https://www.instagram.com/tws_pledis" target='_blank' rel='noopener noreferrer' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TwsInstagram_img} alt="tws 인스타그램" className='tri_m_mem_imgborder' />
                            <div className='tri_m_mem_imgborder' >
                                <h4>
                                    인스타그램
                                </h4>
                            </div>
                        </article>
                    </a>
                    <a href="https://www.youtube.com/@TWS_PLEDIS" target='_blank' rel='noopener noreferrer' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TwsYoutube_img} alt="tws 유튜브" className='tri_m_mem_imgborder' />
                            <div className='tri_m_mem_imgborder' >
                                <h4>
                                    유튜브
                                </h4>
                            </div>
                        </article>
                    </a>
                </section>
            </section>

            <FooterPart FooterPartText='ⓒ 플레디스 엔터테인먼트' />

        </div>
    );
};
