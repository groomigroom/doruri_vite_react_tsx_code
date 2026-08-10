import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../../DoruriDocumentTitle';

import '../../main/TriplesMain.css';
import './TriplesLOVElutionMain.css';

import Menu from '../../../Menu';
import FooterPart from '../../../FooterPart';

import TriplesLov_m_logo from './img/TriplesLov_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
import TriplesLov_m_img from './img/TriplesLov_m_img.jpg';

import TriplesLov_m_S1_img from './img/TriplesLov_m_S1_img.jpg';
import TriplesLov_m_S2_img from './img/TriplesLov_m_S2_img.jpg';
import TriplesLov_m_S8_img from './img/TriplesLov_m_S8_img.jpg';
import TriplesLov_m_S9_img from './img/TriplesLov_m_S9_img.jpg';
import TriplesLov_m_S10_img from './img/TriplesLov_m_S10_img.jpg';
import TriplesLov_m_S13_img from './img/TriplesLov_m_S13_img.jpg';
import TriplesLov_m_S14_img from './img/TriplesLov_m_S14_img.jpg';
import TriplesLov_m_S15_img from './img/TriplesLov_m_S15_img.jpg';

//#000000

export default function TriplesLOVElutionMain() {
    DoruriDocumentTitle('LOVElution');

    return (
        <div className='tri_lov_m_full'>
            <Menu />
            <img src={TriplesLov_m_logo} alt="tri_aci 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_aci 로고 꾸미기" />LOVElution<img src={MainH2Deco} alt="tri_aci 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;LOVElution&apos;과 함께<br />
                지금 내가 자신 있게<br />
                반짝일 수 있게!
            </p>
            <img src={TriplesLov_m_img} className='tri_m_img tri_lov_m_img' alt='tri_aci' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_lov_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesLov_m_S1_img} alt="윤서연 이미지" />
                            <div>
                                <h4>윤서연</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS2' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesLov_m_S2_img} alt="정혜린 이미지" />
                            <div>
                                <h4>정혜린</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS8' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesLov_m_S8_img} alt="공유빈 이미지" />
                            <div>
                                <h4>공유빈</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS9' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesLov_m_S9_img} alt="카에데 이미지" />
                            <div>
                                <h4>카에데</h4>
                            </div>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS10' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesLov_m_S10_img} alt="서다현 이미지" />
                            <div>
                                <h4>서다현</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS13' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesLov_m_S13_img} alt="니엔 이미지" />
                            <div>
                                <h4>니엔</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS14' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesLov_m_S14_img} alt="박소현 이미지" />
                            <div>
                                <h4>박소현</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS15' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesLov_m_S15_img} alt="신위 이미지" />
                            <div>
                                <h4>신위</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 tri_lov_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full tri_lov_m_album_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/TriplesBabyFlowerCityRemixesAlbum' className='tri_m_album_a tri_lov_m_album_a'>
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
