import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../../DoruriDocumentTitle';

import '../../main/TriplesMain.css';
import './TriplesMsnzMain.css';

import TriplesMsnz_m_logo from './img/TriplesMsnz_m_logo.png';
import TriplesMsnz_m_img from './img/TriplesMsnz_m_img.jpg';

import MainH2Deco from '../../../img/main_h2_deco.png';

import Menu from '../../../Menu';
import FooterPart from '../../../FooterPart';

import TriMsnz_m_memS1 from '../../main/img/tri_m_memS1.jpg';
import TriMsnz_m_memS2 from '../../main/img/tri_m_memS2.jpg';
import TriMsnz_m_memS3 from '../../main/img/tri_m_memS3.jpg';
import TriMsnz_m_memS4 from '../../main/img/tri_m_memS4.jpg';
import TriMsnz_m_memS5 from '../../main/img/tri_m_memS5.jpg';
import TriMsnz_m_memS6 from '../../main/img/tri_m_memS6.jpg';
import TriMsnz_m_memS7 from '../../main/img/tri_m_memS7.jpg';
import TriMsnz_m_memS8 from '../../main/img/tri_m_memS8.jpg';
import TriMsnz_m_memS9 from '../../main/img/tri_m_memS9.jpg';
import TriMsnz_m_memS10 from '../../main/img/tri_m_memS10.jpg';
import TriMsnz_m_memS11 from '../../main/img/tri_m_memS11.jpg';
import TriMsnz_m_memS12 from '../../main/img/tri_m_memS12.jpg';
import TriMsnz_m_memS13 from '../../main/img/tri_m_memS13.jpg';
import TriMsnz_m_memS14 from '../../main/img/tri_m_memS14.jpg';
import TriMsnz_m_memS15 from '../../main/img/tri_m_memS15.jpg';
import TriMsnz_m_memS16 from '../../main/img/tri_m_memS16.jpg';
import TriMsnz_m_memS17 from '../../main/img/tri_m_memS17.jpg';
import TriMsnz_m_memS18 from '../../main/img/tri_m_memS18.jpg';
import TriMsnz_m_memS19 from '../../main/img/tri_m_memS19.jpg';
import TriMsnz_m_memS20 from '../../main/img/tri_m_memS20.jpg';
import TriMsnz_m_memS21 from '../../main/img/tri_m_memS21.jpg';
import TriMsnz_m_memS22 from '../../main/img/tri_m_memS22.jpg';
import TriMsnz_m_memS23 from '../../main/img/tri_m_memS23.jpg';
import TriMsnz_m_memS24 from '../../main/img/tri_m_memS24.jpg';

//#9a9a9a

export default function TriplesMsnzMain() {
    DoruriDocumentTitle('msnz');

    return (
        <div className='tri_msnz_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMsnzMain' className="on">한국어</Link>
                <Link to='/TriplesMsnzMainEng'>English</Link>
            </section>
            <img src={TriplesMsnz_m_logo} alt="트리플에스 msnz 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />msnz<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;msnz&apos;와 함께<br />
                행복을 그리는 이 순간<br />
                내 마음 가득히 빛이나!
            </p>
            <img src={TriplesMsnz_m_img} className='tri_m_img tri_msnz_m_img' alt='트리플에스 msnz 이미지' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_msnz_mem_tr_full'>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS1} alt="윤서연 이미지" />
                            <div>
                                <h4>윤서연</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS2'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS2} alt="정혜린 이미지" />
                            <div>
                                <h4>정혜린</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS3'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS3} alt="이지우 이미지" />
                            <div>
                                <h4>이지우</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS4'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS4} alt="김채연 이미지" />
                            <div>
                                <h4>김채연</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS5'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS5} alt="김유연 이미지" />
                            <div>
                                <h4>김유연</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS6'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS6} alt="김수민 이미지" />
                            <div>
                                <h4>김수민</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS7'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS7} alt="김나경 이미지" />
                            <div>
                                <h4>김나경</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS8'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS8} alt="공유빈 이미지" />
                            <div>
                                <h4>공유빈</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS9'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS9} alt="카에데 이미지" />
                            <div>
                                <h4>카에데</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS10'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS10} alt="서다현 이미지" />
                            <div>
                                <h4>서다현</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS11'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS11} alt="코토네 이미지" />
                            <div>
                                <h4>코토네</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS12'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS12} alt="곽연지 이미지" />
                            <div>
                                <h4>곽연지</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS13'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS13} alt="니엔 이미지" />
                            <div>
                                <h4>니엔</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS14'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS14} alt="박소현 이미지" />
                            <div>
                                <h4>박소현</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS15'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS15} alt="신위 이미지" />
                            <div>
                                <h4>신위</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS16'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS16} alt="마유 이미지" />
                            <div>
                                <h4>마유</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS17'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS17} alt="린 이미지" />
                            <div>
                                <h4>린</h4>
                            </div>
                        </article>
                    </Link>


                    <Link to='/TriplesMemS18'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS18} alt="주빈 이미지" />
                            <div>
                                <h4>주빈</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS19'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS19} alt="정하연 이미지" />
                            <div>
                                <h4>정하연</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS20'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS20} alt="박시온 이미지" />
                            <div>
                                <h4>박시온</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS21'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS21} alt="김채원 이미지" />
                            <div>
                                <h4>김채원</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS22'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS22} alt="설린 이미지" />
                            <div>
                                <h4>설린</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS23'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS23} alt="서아 이미지" />
                            <div>
                                <h4>서아</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS24'>
                        <article className='tri_m_mem'>
                            <img src={TriMsnz_m_memS24} alt="지연 이미지" />
                            <div>
                                <h4>지연</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            {/* <section className="tri_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesMemS1' className='tri_m_mem_a'>
                            <img src={Tri_m_memS1} alt="윤서연 이미지" />
                            <h4>윤서연</h4>
                        </Link>
                        <Link to='/TriplesMemS2'>
                            <img src={Tri_m_memS2} alt="정혜린 이미지" />
                            <h4>정혜린</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesMemS3'>
                            <img src={Tri_m_memS3} alt="이지우 이미지" />
                            <h4>이지우</h4>
                        </Link>

                        <Link to='/TriplesMemS4'>
                            <img src={Tri_m_memS4} alt="김채연 이미지" />
                            <h4>김채연</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesMemS5'>
                            <img src={Tri_m_memS5} alt="김유연 이미지" />
                            <h4>김유연</h4>
                        </Link>

                        <Link to='/TriplesMemS6'>
                            <img src={Tri_m_memS6} alt="김수민 이미지" />
                            <h4>김수민</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesMemS7'>
                            <img src={Tri_m_memS7} alt="김나경 이미지" />
                            <h4>김나경</h4>
                        </Link>

                        <Link to='/TriplesMemS8'>
                            <img src={Tri_m_memS8} alt="공유빈 이미지" />
                            <h4>공유빈</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesMemS9'>
                            <img src={Tri_m_memS9} alt="카에데 이미지" />
                            <h4>카에데</h4>
                        </Link>

                        <Link to='/TriplesMemS10'>
                            <img src={Tri_m_memS10} alt="서다현 이미지" />
                            <h4>서다현</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesMemS11'>
                            <img src={Tri_m_memS11} alt="코토네 이미지" />
                            <h4>코토네</h4>
                        </Link>

                        <Link to='/TriplesMemS12'>
                            <img src={Tri_m_memS12} alt="곽연지 이미지" />
                            <h4>곽연지</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesMemS13'>
                            <img src={Tri_m_memS13} alt="니엔 이미지" />
                            <h4>니엔</h4>
                        </Link>

                        <Link to='/TriplesMemS14'>
                            <img src={Tri_m_memS14} alt="박소현 이미지" />
                            <h4>박소현</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesMemS15'>
                            <img src={Tri_m_memS15} alt="신위 이미지" />
                            <h4>신위</h4>
                        </Link>

                        <Link to='/TriplesMemS16'>
                            <img src={Tri_m_memS16} alt="마유 이미지" />
                            <h4>마유</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesMemS17'>
                            <img src={Tri_m_memS17} alt="린 이미지" />
                            <h4>린</h4>
                        </Link>


                        <Link to='/TriplesMemS18'>
                            <img src={Tri_m_memS18} alt="주빈 이미지" />
                            <h4>주빈</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesMemS19'>
                            <img src={Tri_m_memS19} alt="정하연 이미지" />
                            <h4>정하연</h4>
                        </Link>

                        <Link to='/TriplesMemS20'>
                            <img src={Tri_m_memS20} alt="박시온 이미지" />
                            <h4>박시온</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesMemS21'>
                            <img src={Tri_m_memS21} alt="김채원 이미지" />
                            <h4>김채원</h4>
                        </Link>

                        <Link to='/TriplesMemS22'>
                            <img src={Tri_m_memS22} alt="설린 이미지" />
                            <h4>설린</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesMemS23'>
                            <img src={Tri_m_memS23} alt="서아 이미지" />
                            <h4>서아</h4>
                        </Link>

                        <Link to='/TriplesMemS24'>
                            <img src={Tri_m_memS24} alt="지연 이미지" />
                            <h4>지연</h4>
                        </Link>
                    </section>
                </section>
            </section> */}

            <h2 className='tri_m_h2 tri_msnz_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full tri_msnz_m_album_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/TriplesBabyFlowerCityRemixesAlbum' className='tri_m_album_a tri_msnz_m_album_a'>
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
        </div >
    );
};
