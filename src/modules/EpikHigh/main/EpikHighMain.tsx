import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './EpikHighMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import EpikHigh_m_logo from './img/EpikHigh_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import EpikHigh_m_img from './img/Epi_m_img.jpg';

import EpikHighTablo_m_img from './img/Epi_mm_Tablo_img.jpg';
import EpikHighMithra_m_img from './img/Epi_mm_Mithra_img.jpg';
import EpikHighTukutz_m_img from './img/Epi_mm_Tukutz_img.jpg';

import EpikHighPumpCollectorsEditionAlbum_img from '../albums/img/EpikHighPumpCollectorsEditionAlbum_img.jpg';

import EpikHighYoutube_icon_img from '../../10CM/main/img/TenCM_youtube_icon_img.png';

//#000000

export default function EpikHighMain() {
    return (
        <div className='epi_m_full'>
            <Menu />
            <img src={EpikHigh_m_logo} alt="EpikHigh 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="EpikHigh 로고 꾸미기" />에픽하이<img src={MainH2Deco} alt="EpikHigh 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;에픽하이&apos;와 함께<br />
                아무도 내 맘을 몰라도<br />
                Can&apos;t stop!</p>
            <img src={EpikHigh_m_img} className='tri_m_img epi_m_img' alt='EpikHigh' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full epi_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/EpiMemTablo' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={EpikHighTablo_m_img} alt="타블로 이미지" />
                            <div>
                                <h4>타블로</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/EpiMemTwokutz' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={EpikHighTukutz_m_img} alt="투컷 이미지" />
                            <div>
                                <h4>투컷</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/EpiMemMithra' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={EpikHighMithra_m_img} alt="미쓰라 이미지" />
                            <div>
                                <h4>미쓰라</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <section className="tri_m_mem_tr_full_mobile epi_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/EpiMemTablo' className='tri_m_mem_a'>
                            <img src="" alt="타블로 이미지" />
                            <h4>타블로</h4>
                        </Link>
                        <Link to='/EpiMemTwokutz' className='tri_m_mem_a'>
                            <img src="" alt="투컷 이미지" />
                            <h4>투컷</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/EpiMemMithra' className='tri_m_mem_a'>
                            <img src="" alt="미쓰라 이미지" />
                            <h4>미쓰라</h4>
                        </Link>
                    </section>
                </section>

            </section>

            <h2 className='tri_m_h2 epikhigh_m_h2_4'>▪ 이벤트 ▪</h2>
            <section className='tri_m_event_tr_full epikhigh_m_event_tr_full'>
                <section className='tri_m_event_tr'>
                    <Link to='/EpikHighEvent' className='tri_m_event_a epikhigh_m_event_a'>
                        <article className='tri_m_events'>
                            <img src={EpikHigh_m_img} alt="epikhigh event" />
                            <div>
                                <h4>
                                    에픽하이<br />
                                    이벤트
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 epikhigh_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full epikhigh_m_album_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/EpikHighPumpCollectorsEditionAlbum' className='tri_m_album_a epikhigh_m_album_a'>
                        <article className='tri_m_albums'>
                            <img src={EpikHighPumpCollectorsEditionAlbum_img} alt="EpikHighPumpCollectorsEditionAlbum" />
                            <div>
                                <h4>
                                    PUMP<br />
                                    COLLECTOR&apos;S<br />
                                    EDITION
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 epikhigh_m_h2_6'>▪ sns ▪</h2>
            <section className='tri_m_sns_tr_full epikhigh_m_sns_tr_full'>
                <section className='tri_m_album_tr'>
                    <a href="https://www.youtube.com/@OfficialEpikHigh" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a epikhigh_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={EpikHighYoutube_icon_img} alt="에픽하이 유튜브" />
                            <div>
                                <h4>
                                    유튜브
                                </h4>
                            </div>
                        </article>
                    </a>
                </section>
            </section>

            <FooterPart FooterPartText='ⓒ 아워즈' />
        </div >
    );
};
