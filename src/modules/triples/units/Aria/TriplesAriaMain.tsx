import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../../DoruriDocumentTitle';

import '../../main/TriplesMain.css';
import './TriplesAriaMain.css';

import Menu from '../../../Menu';
import FooterPart from '../../../FooterPart';

import TriplesAria_m_logo from './img/TriplesAria_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
import TriplesAria_m_img from './img/TriplesAria_m_img.jpg';

import TriplesAria_m_S3_img from './img/TriplesAria_m_S3_img.jpg';
import TriplesAria_m_S4_img from './img/TriplesAria_m_S4_img.jpg';
import TriplesAria_m_S9_img from './img/TriplesAria_m_S9_img.jpg';
import TriplesAria_m_S10_img from './img/TriplesAria_m_S10_img.jpg';
import TriplesAria_m_S13_img from './img/TriplesAria_m_S13_img.jpg';



//191919

export default function TriplesAriaMain() {
    DoruriDocumentTitle('Aria');

    return (
        <div className='tri_ari_m_full'>
            <Menu />
            <img src={TriplesAria_m_logo} alt="tri_Aria 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_Aria 로고 꾸미기" />Aria<img src={MainH2Deco} alt="tri_Aria 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                날이 흐리더라도<br />
                &apos;Aria&apos;와 함께<br />
                열심히 뭐든 해봐요!
            </p>
            <img src={TriplesAria_m_img} className='tri_m_img tri_ari_m_img' alt='tri_ari' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_ari_m_mem_tr_full'>
                <section className='tri_ari_m_mem_tr3'>
                    <Link to='/TriplesMemS3' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAria_m_S3_img} alt="이지우 이미지" />
                            <div>
                                <h4>이지우</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS4' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAria_m_S4_img} alt="김채연 이미지" />
                            <div>
                                <h4>김채연</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS9' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAria_m_S9_img} alt="카에데 이미지" />
                            <div>
                                <h4>카에데</h4>
                            </div>
                        </article>
                    </Link>

                </section>

                <section className='tri_ari_m_mem_tr2'>
                    <Link to='/TriplesMemS10' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAria_m_S10_img} alt="서다현 이미지" />
                            <div>
                                <h4>서다현</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS13' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAria_m_S13_img} alt="니엔 이미지" />
                            <div>
                                <h4>니엔</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 tri_aria_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full tri_aria_m_album_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/TriplesBabyFlowerCityRemixesAlbum' className='tri_m_album_a'>
                        <article className='tri_m_albums'>
                            <img src={""} alt="Baby Flower City Remixes" />
                            <div>
                                <h4>
                                    &lt;Baby Flower City Remixes&gt;
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>
            <FooterPart FooterPartText='ⓒ ㈜모드하우스' />
        </div>
    );
};
