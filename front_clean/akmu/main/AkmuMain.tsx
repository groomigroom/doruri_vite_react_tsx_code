import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import "../../triples/main/TriplesMain.css";
import "./AkmuMain.css";

import Akmu_m_logo from './img/akmu_m_logo.svg';
import Akmu_m_img from './img/aknu_m_akmuimg.jpg';

import Akmu_m_chanhyuk from './img/aknu_m_chanhyuk.jpg';
import Akmu_m_suhyun from './img/aknu_m_suhyun.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

import AkmuGaehwaAlbum_img from '../albums/img/AkmuGaehwaAlbum_img.jpg';

import AkmuInstagram_img from './img/AkmuInstagram_icon_img.png';
import AkmuYoutube_img from './img/AkmuYoutube_icon_img.png';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

//#13983f

export default function AkmuMain() {
    DoruriDocumentTitle('AKMU');

    return (
        <div className='akmu_m_full'>
            <header className='tri_m_header'>
                <Menu />
                <section className="home_translate">
                    <Link to='/AkmuMain' className="on">한국어</Link>
                    <Link to='/AkmuMainEng'>English</Link>
                </section>
            </header>
            <section className='tri_m_logo_section'>
                <img src={Akmu_m_logo} alt="AKMU 로고" className='tri_m_logo' />
            </section>
            <section className='tri_m_h2'>
                <h2>
                    <img src={MainH2Deco} alt="AKMU 로고 꾸미기" />AKMU<img src={MainH2Deco} alt="AKMU 로고 꾸미기" />
                </h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    지치고 병들지 말고<br />
                    'AKMU'와 함께<br />
                    오늘도 힘내길 바래요!
                </p>
            </section>
            <section className='tri_m_img'>
                <img src={Akmu_m_img} className='akmu_m_mem_imgborder' alt='akmu' />
            </section>
            <section className='tri_m_h2'>
                <h2>▪ 멤버 ▪</h2>
            </section>
            <section className='tri_m_mem_tr_full'>
                <section className='tri_m_mem_tr2'>
                    <Link to='/AkmuMemChanhyuk' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Akmu_m_chanhyuk} alt="이찬혁 이미지" className='akmu_m_mem_imgborder' />
                            <div className='akmu_m_mem_imgborder'>
                                <h4>이찬혁</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/AkmuMemSuhyun' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Akmu_m_suhyun} alt="이수현 이미지" className='akmu_m_mem_imgborder' />
                            <div className='akmu_m_mem_imgborder'>
                                <h4>이수현</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile akmu_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/AkmuMemChanhyuk' className='tri_m_mem_a'>
                            <img src={Akmu_m_chanhyuk} alt="이찬혁 이미지" />
                            <h4>이찬혁</h4>
                        </Link>
                        <Link to='/AkmuMemSuhyun'>
                            <img src={Akmu_m_suhyun} alt="이수현 이미지" />
                            <h4>이수현</h4>
                        </Link>
                    </section>
                </section>
            </section>

            <section className='tri_m_h2'>
                <h2>▪ 이벤트 ▪</h2>
            </section>
            <section className='tri_m_mem_tr_full'>
                <section className='tri_m_mem_tr1'>

                    <Link to='/AkmuEvent' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Akmu_m_img} alt="akmu event" className='akmu_m_mem_imgborder' />
                            <div className='akmu_m_mem_imgborder'>
                                <h4>개화<br />
                                    이벤트</h4>
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
                    <Link to='/AkmuGaehwaAlbum' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={AkmuGaehwaAlbum_img} alt="개화" className='akmu_m_mem_imgborder' />
                            <div className='akmu_m_mem_imgborder'>
                                <h4>
                                    개화
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
                    <a href="https://www.instagram.com/akmuofficial/" target='_blank' rel='noopener noreferrer' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={AkmuInstagram_img} alt="악뮤 인스타그램" className='akmu_m_mem_imgborder' />
                            <div className='akmu_m_mem_imgborder'>
                                <h4>
                                    인스타그램
                                </h4>
                            </div>
                        </article>
                    </a>
                    <a href="https://www.youtube.com/@AKMU" target='_blank' rel='noopener noreferrer' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={AkmuYoutube_img} alt="악뮤 유튜브" className='akmu_m_mem_imgborder' />
                            <div className='akmu_m_mem_imgborder'>
                                <h4>
                                    유튜브
                                </h4>
                            </div>
                        </article>
                    </a>
                </section>
            </section>

            <FooterPart FooterPartText='ⓒ 영감의 샘터' />
        </div>
    );
};
