import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../../DoruriDocumentTitle';

import '../../main/TriplesMain.css';
import './TriplesVisionaryVisionMain.css';

import Menu from '../../../Menu';
import FooterPart from '../../../FooterPart';

import TriplesVis_m_logo from './img/TriplesVisionaryVision_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
import TriplesVis_m_img from './img/TriplesVisionaryVision_m_img.jpg';

import TriplesVis_m_S2_img from './img/TriplesVisionaryVision_m_S2_img.jpg';
import TriplesVis_m_S5_img from './img/TriplesVisionaryVision_m_S5_img.jpg';
import TriplesVis_m_S7_img from './img/TriplesVisionaryVision_m_S7_img.jpg';
import TriplesVis_m_S8_img from './img/TriplesVisionaryVision_m_S8_img.jpg';
import TriplesVis_m_S9_img from './img/TriplesVisionaryVision_m_S9_img.jpg';
import TriplesVis_m_S11_img from './img/TriplesVisionaryVision_m_S11_img.jpg';
import TriplesVis_m_S12_img from './img/TriplesVisionaryVision_m_S12_img.jpg';
import TriplesVis_m_S13_img from './img/TriplesVisionaryVision_m_S13_img.jpg';
import TriplesVis_m_S14_img from './img/TriplesVisionaryVision_m_S14_img.jpg';
import TriplesVis_m_S15_img from './img/TriplesVisionaryVision_m_S15_img.jpg';
import TriplesVis_m_S17_img from './img/TriplesVisionaryVision_m_S17_img.jpg';
import TriplesVis_m_S24_img from './img/TriplesVisionaryVision_m_S24_img.jpg';

//#191919

export default function TriplesVisionaryVisionMain() {
    DoruriDocumentTitle('Visionary Vision');

    return (
        <div className='tri_vis_m_full'>
            <Menu />
            <img src={TriplesVis_m_logo} alt="tri_vis 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_vis 로고 꾸미기" />Visionary Vision<img src={MainH2Deco} alt="tri_vis 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;Visionary Vision&apos;과 함께<br />
                바람 뚫고<br />
                열심히 달려 가봐요!
            </p>
            <img src={TriplesVis_m_img} className='tri_m_img' alt='tri_vis' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_vis_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS2' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesVis_m_S2_img} alt="정혜린 이미지" />
                            <div>
                                <h4>정혜린</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS5' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesVis_m_S5_img} alt="김유연 이미지" />
                            <div>
                                <h4>김유연</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS7' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesVis_m_S7_img} alt="김나경 이미지" />
                            <div>
                                <h4>김나경</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS8' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesVis_m_S8_img} alt="공유빈 이미지" />
                            <div>
                                <h4>공유빈</h4>
                            </div>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS9' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesVis_m_S9_img} alt="카에데 이미지" />
                            <div>
                                <h4>카에데</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS11' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesVis_m_S11_img} alt="코토네 이미지" />
                            <div>
                                <h4>코토네</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS12' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesVis_m_S12_img} alt="곽연지 이미지" />
                            <div>
                                <h4>곽연지</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS13' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesVis_m_S13_img} alt="니엔 이미지" />
                            <div>
                                <h4>니엔</h4>
                            </div>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS14' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesVis_m_S14_img} alt="박소현 이미지" />
                            <div>
                                <h4>박소현</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS15' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesVis_m_S15_img} alt="신위 이미지" />
                            <div>
                                <h4>신위</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS17' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesVis_m_S17_img} alt="린 이미지" />
                            <div>
                                <h4>린</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS24' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesVis_m_S24_img} alt="지연 이미지" />
                            <div>
                                <h4>지연</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 tri_vis_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full tri_vis_m_album_tr_full'>
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
