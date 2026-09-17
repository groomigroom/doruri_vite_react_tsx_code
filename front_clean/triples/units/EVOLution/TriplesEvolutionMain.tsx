import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../../DoruriDocumentTitle';

import '../../main/TriplesMain.css';
import './TriplesEvolutionMain.css';

import Menu from '../../../Menu';
import FooterPart from '../../../FooterPart';

import TriplesEvo_m_logo from './img/TriplesEvolution_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
import TriplesEvo_m_img from './img/TriplesEvolution_m_img.jpg';

import TriplesEvo_m_S3_img from './img/TriplesEvolution_m_S3_img.jpg';
import TriplesEvo_m_S4_img from './img/TriplesEvolution_m_S4_img.jpg';
import TriplesEvo_m_S5_img from './img/TriplesEvolution_m_S5_img.jpg';
import TriplesEvo_m_S6_img from './img/TriplesEvolution_m_S6_img.jpg';
import TriplesEvo_m_S7_img from './img/TriplesEvolution_m_S7_img.jpg';
import TriplesEvo_m_S11_img from './img/TriplesEvolution_m_S11_img.jpg';
import TriplesEvo_m_S12_img from './img/TriplesEvolution_m_S12_img.jpg';
import TriplesEvo_m_S16_img from './img/TriplesEvolution_m_S16_img.jpg';

//#000000

export default function TriplesEvolutionMain() {
    DoruriDocumentTitle('EVOLution');

    return (
        <div className='tri_evo_m_full'>
            <Menu />
            <img src={TriplesEvo_m_logo} alt="tri_evo 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_evo 로고 꾸미기" />EVOLution<img src={MainH2Deco} alt="tri_evo 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;EVOLution&apos;과 함께<br />
                새로 태어난 듯이<br />
                Cut the diamond!
            </p>
            <img src={TriplesEvo_m_img} className='tri_m_img tri_evo_m_img' alt='tri_evo' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_evo_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS3' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesEvo_m_S3_img} alt="이지우 이미지" />
                            <div>
                                <h4>이지우</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS4' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesEvo_m_S4_img} alt="김채연 이미지" />
                            <div>
                                <h4>김채연</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS5' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesEvo_m_S5_img} alt="김유연 이미지" />
                            <div>
                                <h4>김유연</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS6' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesEvo_m_S6_img} alt="김수민 이미지" />
                            <div>
                                <h4>김수민</h4>
                            </div>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS7' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesEvo_m_S7_img} alt="김나경 이미지" />
                            <div>
                                <h4>김나경</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS11' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesEvo_m_S11_img} alt="코토네 이미지" />
                            <div>
                                <h4>코토네</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS12' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesEvo_m_S12_img} alt="곽연지 이미지" />
                            <div>
                                <h4>곽연지</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS16' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesEvo_m_S16_img} alt="마유 이미지" />
                            <div>
                                <h4>마유</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 tri_evo_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full tri_evo_m_album_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/TriplesBabyFlowerCityRemixesAlbum' className='tri_m_album_a tri_evo_m_album_a'>
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
