import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './StrayKidsMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Str_m_logo from './img/Str_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import Str_m_img from './img/stray_m_stray_kids.jpg';

import Str_m_MemBangchan_img from './img/stray_m_mem_Bangchan.jpg';
import Str_m_MemLino_img from './img/stray_m_mem_Lino.jpg';
import Str_m_MemChangbin_img from './img/stray_m_mem_Changbin.jpg';
import Str_m_MemHyunjin_img from './img/stray_m_mem_Hyunjin.jpg';
import Str_m_MemHan_img from './img/stray_m_mem_Han.jpg';
import Str_m_MemFilix_img from './img/stray_m_mem_Filix.jpg';
import Str_m_MemSeungmin_img from './img/stray_m_mem_Seungmin.jpg';
import Str_m_MemIn_img from './img/stray_m_mem_In.jpg';

import StrayKids3Racha_m_img from '../units/3RACHA/img/StrayKids3Racha_m_img.jpg';

import StrayKidsSKZReplay2026Pt1Album_img from '../albums/img/StrayKidsSKZReplay2026Pt1Album_img.jpg';

import StrayKidsInstagram_img from '../../triples/main/img/triples_instagram_icon.png';
import StrayKidsYoutube_img from '../../triples/main/img/triples_youtube_icon.png';

//#191919
//#ffffff


export default function StrayKidsMain() {
    return (
        <div className='str_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/StrayKidsMain' className="on">한국어</Link>
                <Link to='/StrayKidsMainEng'>English</Link>
            </section>
            <img src={Str_m_logo} alt="스트레이 키즈 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="스트레이 키즈 로고 꾸미기" />Stray Kids<img src={MainH2Deco} alt="스트레이 키즈 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;Stray Kids&apos;와 함께<br />
                시련 속에서도 계속<br />
                running out!</p>
            <img src={Str_m_img} className='tri_m_img' alt='스트레이 키즈' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full str_m_mem_tr_full'>

                <section className='tri_m_mem_tr str_m_mem_tr'>
                    <Link to='/StrayMemBangchan' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Str_m_MemBangchan_img} alt="방찬 이미지" />
                            <div>
                                <h4>방찬</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/StrayMemLino'>
                        <article className='tri_m_mem'>
                            <img src={Str_m_MemLino_img} alt="리노 이미지" />
                            <div>
                                <h4>리노</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/StrayMemChangbin'>
                        <article className='tri_m_mem'>
                            <img src={Str_m_MemChangbin_img} alt="창빈 이미지" />
                            <div>
                                <h4>창빈</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/StrayMemHyunjin'>
                        <article className='tri_m_mem'>
                            <img src={Str_m_MemHyunjin_img} alt="현진 이미지" />
                            <div>
                                <h4>현진</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/StrayMemHan'>
                        <article className='tri_m_mem'>
                            <img src={Str_m_MemHan_img} alt="한 이미지" />
                            <div>
                                <h4>한</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/StrayMemFilix'>
                        <article className='tri_m_mem'>
                            <img src={Str_m_MemFilix_img} alt="필릭스 이미지" />
                            <div>
                                <h4>필릭스</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/StrayMemSeungmin'>
                        <article className='tri_m_mem'>
                            <img src={Str_m_MemSeungmin_img} alt="승민 이미지" />
                            <div>
                                <h4>승민</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/StrayMemIn'>
                        <article className='tri_m_mem'>
                            <img src={Str_m_MemIn_img} alt="아이엔 이미지" />
                            <div>
                                <h4>아이엔</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile str_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/StrayMemBangchan' className='tri_m_mem_a'>
                            <img src={Str_m_MemBangchan_img} alt="방찬 이미지" />
                            <h4>방찬</h4>
                        </Link>
                        <Link to='/StrayMemLino'>
                            <img src={Str_m_MemLino_img} alt="리노 이미지" />
                            <h4>리노</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/StrayMemChangbin'>
                            <img src={Str_m_MemChangbin_img} alt="창빈 이미지" />
                            <h4>창빈</h4>
                        </Link>

                        <Link to='/StrayMemHyunjin'>
                            <img src={Str_m_MemHyunjin_img} alt="현진 이미지" />
                            <h4>현진</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/StrayMemHan'>
                            <img src={Str_m_MemHan_img} alt="한 이미지" />
                            <h4>한</h4>
                        </Link>

                        <Link to='/StrayMemFilix'>
                            <img src={Str_m_MemFilix_img} alt="필릭스 이미지" />
                            <h4>필릭스</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/StrayMemSeungmin'>
                            <img src={Str_m_MemSeungmin_img} alt="승민 이미지" />
                            <h4>승민</h4>
                        </Link>

                        <Link to='/StrayMemIn'>
                            <img src={Str_m_MemIn_img} alt="아이엔 이미지" />
                            <h4>아이엔</h4>
                        </Link>
                    </section>
                </section>

            </section>
            <h2 className='tri_m_h2 str_m_h2_3'>▪ 유닛 ▪</h2>
            <section className='str_m_units_tr_full'>
                <section className='tri_m_units_tr1'>
                    <Link to='/StrayKidsThreeRachaMain' className='tri_m_units_a'>
                        <article className='tri_m_units'>
                            <img src={StrayKids3Racha_m_img} alt="3RACHA" />
                            <div>
                                <h4>3RACHA</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 stray_m_h2_4'>▪ 이벤트 ▪</h2>
            <section className='tri_m_event_tr_full stray_m_event_tr_full'>
                <section className='tri_m_event_tr'>
                    <Link to='/StrayKidsEvent' className='tri_m_event_a'>
                        <article className='tri_m_events'>
                            <img src='' alt="ioi event" />
                            <div>
                                <h4>Replay<br />
                                    이벤트</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 stray_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full stray_m_album_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/StrayKidsSKZReplay2026Pt1Album' className='tri_m_album_a'>
                        <article className='tri_m_albums'>
                            <img src={StrayKidsSKZReplay2026Pt1Album_img} alt="StrayKidsSKZReplay2026Pt1Album" />
                            <div>
                                <h4>
                                    SKZ<br />
                                    Replay<br />
                                    2026
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 stray_m_h2_6'>▪ sns ▪</h2>
            <section className='tri_m_sns_tr_full str_m_sns_tr_full'>
                <section className='tri_m_album_tr'>
                    <a href="https://www.instagram.com/realstraykids" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={StrayKidsInstagram_img} alt="Stray Kids 인스타그램" />
                            <div>
                                <h4>
                                    인스타그램
                                </h4>
                            </div>
                        </article>
                    </a>
                    <a href="https://www.youtube.com/@StrayKids" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={StrayKidsYoutube_img} alt="Stray Kids 유튜브" />
                            <div>
                                <h4>
                                    유튜브
                                </h4>
                            </div>
                        </article>
                    </a>
                </section>
            </section>

            <FooterPart FooterPartText='ⓒ JYP엔터테인먼트' />
        </div>
    );
};
