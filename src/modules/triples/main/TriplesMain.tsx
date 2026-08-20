import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import './TriplesMain.css';

import Tri_m_logo from './img/tri_m_logo.svg';
import Tri_m_img from './img/tri_m_img.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tri_m_memS1 from './img/tri_m_memS1.jpg';
import Tri_m_memS2 from './img/tri_m_memS2.jpg';
import Tri_m_memS3 from './img/tri_m_memS3.jpg';
import Tri_m_memS4 from './img/tri_m_memS4.jpg';
import Tri_m_memS5 from './img/tri_m_memS5.jpg';
import Tri_m_memS6 from './img/tri_m_memS6.jpg';
import Tri_m_memS7 from './img/tri_m_memS7.jpg';
import Tri_m_memS8 from './img/tri_m_memS8.jpg';
import Tri_m_memS9 from './img/tri_m_memS9.jpg';
import Tri_m_memS10 from './img/tri_m_memS10.jpg';
import Tri_m_memS11 from './img/tri_m_memS11.jpg';
import Tri_m_memS12 from './img/tri_m_memS12.jpg';
import Tri_m_memS13 from './img/tri_m_memS13.jpg';
import Tri_m_memS14 from './img/tri_m_memS14.jpg';
import Tri_m_memS15 from './img/tri_m_memS15.jpg';
import Tri_m_memS16 from './img/tri_m_memS16.jpg';
import Tri_m_memS17 from './img/tri_m_memS17.jpg';
import Tri_m_memS18 from './img/tri_m_memS18.jpg';
import Tri_m_memS19 from './img/tri_m_memS19.jpg';
import Tri_m_memS20 from './img/tri_m_memS20.jpg';
import Tri_m_memS21 from './img/tri_m_memS21.jpg';
import Tri_m_memS22 from './img/tri_m_memS22.jpg';
import Tri_m_memS23 from './img/tri_m_memS23.jpg';
import Tri_m_memS24 from './img/tri_m_memS24.jpg';

import TriplesUnitAcidAngelFromAsia_m_img from '../units/AcidAngel_fromAsia/img/TriAaa_m_img.jpg';
import TriplesUnitKrystalEyes_m_img from '../units/KRystalEyes/img/TriplesKre_m_img.jpg';
import TriplesUnitAcidEyes from '../units/AcidEyes/img/TriplesAci_m_img.jpg';
import TriplesUnitLoveLution_m_img from '../units/LOVElution/img/TriplesLov_m_img.jpg';
import TriplesUnitEvoLution_m_img from '../units/EVOLution/img/TriplesEvolution_m_img.jpg';
import TriplesUnitNxt_m_img from '../units/NXT/img/TriplesNxt_m_img.jpg';
import TriplesUnitGlow_m_img from '../units/Glow/img/TriplesGlow_m_img.jpg';
import TriplesUnitAria_m_img from '../units/Aria/img/TriplesAria_m_img.jpg';
import TriplesUnitVisionaryVision_m_img from '../units/VisionaryVision/img/TriplesVisionaryVision_m_img.jpg';
import TriplesUnitHatch_m_img from '../units/Hatch/img/TriplesHatch_m_img.jpg';
import TriplesUnitAlphie_m_img from '../units/Alphie/img/TriplesAlphie_m_img.jpg';
import TriplesUnitNeptune_m_img from '../units/Neptune/img/TriplesNeptune_m_img.jpg';
import TriplesUnitMoon_m_img from '../units/Moon/img/TriplesMoon_m_img.jpg';
import TriplesUnitSun_m_img from '../units/Sun/img/TriplesSun_m_img.jpg';
import TriplesUnitZenith_m_img from '../units/Zenith/img/TriplesZenith_m_img.jpg';
import TriplesUnitMsnz_m_img from '../units/msnz/img/TriplesMsnz_m_img.jpg';

import TriplesBabyFlowerCityRemixesAlbum_img from '../albums/img/TriplesBabyFlowerCityRemixesAlbum_img.jpg';

import TriplesInstagram_img from './img/triples_instagram_icon.png';
import TriplesYoutube_img from './img/triples_youtube_icon.png';

export default function TriplesMain() {
    DoruriDocumentTitle('tripleS');

    return (
        <div className='tri_m_full'>
            <header className='tri_m_header'>
                <Menu />
                <section className="home_translate">
                    <Link to='/TriplesMain' className="on">한국어</Link>
                    <Link to='/TriplesMainEng'>English</Link>
                </section>
            </header>
            <section className='tri_m_logo_section'>
                <img src={Tri_m_logo} alt="트리플에스 로고" />
            </section>
            <section className='tri_m_h2'>
                <h2><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />tripleS<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            </section >
            <section className='tri_m_intropp'>
                <p>우리는 하나이자 스물넷입니다.<br />
                    상처, 고난, 또 눈물이 길을 막아도<br />
                    &apos;트리플에스&apos;와 함께 고개를 들어 보아요.
                </p>
            </section>
            <section className='tri_m_img'>
                <img src={Tri_m_img} alt='트리플에스 이미지' className='tri_m_real_img' />
            </section>
            <section className='tri_m_h2'>
                <h2>▪ 멤버 ▪</h2>
            </section>
            <section className='tri_m_mem_tr_full'>
                <section className='tri_m_mem_tr4'>
                    <a href='http://localhost:8080/members/TriplesMemS1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS1} alt="윤서연 이미지" />
                            <div>
                                <h4>윤서연</h4>
                            </div>
                        </article>
                    </a>
                    <a href='http://localhost:8080/members/TriplesMemS2' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS2} alt="정혜린 이미지" />
                            <div>
                                <h4>정혜린</h4>
                            </div>
                        </article>
                    </a>

                    <a href='http://localhost:8080/members/TriplesMemS3' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS3} alt="이지우 이미지" />
                            <div>
                                <h4>이지우</h4>
                            </div>
                        </article>
                    </a>

                    <a href='http://localhost:8080/members/TriplesMemS4' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS4} alt="김채연 이미지" />
                            <div>
                                <h4>김채연</h4>
                            </div>
                        </article>
                    </a>
                </section>

                <section className='tri_m_mem_tr4'>
                    <a href='http://localhost:8080/members/TriplesMemS5' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS5} alt="김유연 이미지" />
                            <div>
                                <h4>김유연</h4>
                            </div>
                        </article>
                    </a>

                    <a href='http://localhost:8080/members/TriplesMemS6' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS6} alt="김수민 이미지" />
                            <div>
                                <h4>김수민</h4>
                            </div>
                        </article>
                    </a>

                    <a href='http://localhost:8080/members/TriplesMemS7' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS7} alt="김나경 이미지" />
                            <div>
                                <h4>김나경</h4>
                            </div>
                        </article>
                    </a>

                    <a href='http://localhost:8080/members/TriplesMemS8' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS8} alt="공유빈 이미지" />
                            <div>
                                <h4>공유빈</h4>
                            </div>
                        </article>
                    </a>
                </section>

                <section className='tri_m_mem_tr4'>
                    <a href='http://localhost:8080/members/TriplesMemS9' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS9} alt="카에데 이미지" />
                            <div>
                                <h4>카에데</h4>
                            </div>
                        </article>
                    </a>

                    <a href='http://localhost:8080/members/TriplesMemS10' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS10} alt="서다현 이미지" />
                            <div>
                                <h4>서다현</h4>
                            </div>
                        </article>
                    </a>

                    <a href='http://localhost:8080/members/TriplesMemS11' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS11} alt="코토네 이미지" />
                            <div>
                                <h4>코토네</h4>
                            </div>
                        </article>
                    </a>

                    <a href='http://localhost:8080/members/TriplesMemS12' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS12} alt="곽연지 이미지" />
                            <div>
                                <h4>곽연지</h4>
                            </div>
                        </article>
                    </a>
                </section>

                <section className='tri_m_mem_tr4'>
                    <a href='http://localhost:8080/members/TriplesMemS13' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS13} alt="니엔 이미지" />
                            <div>
                                <h4>니엔</h4>
                            </div>
                        </article>
                    </a>

                    <a href='http://localhost:8080/members/TriplesMemS14' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS14} alt="박소현 이미지" />
                            <div>
                                <h4>박소현</h4>
                            </div>
                        </article>
                    </a>

                    <a href='http://localhost:8080/members/TriplesMemS15' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS15} alt="신위 이미지" />
                            <div>
                                <h4>신위</h4>
                            </div>
                        </article>
                    </a>

                    <a href='http://localhost:8080/members/TriplesMemS16' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS16} alt="마유 이미지" />
                            <div>
                                <h4>마유</h4>
                            </div>
                        </article>
                    </a>
                </section>

                <section className='tri_m_mem_tr4'>
                    <a href='http://localhost:8080/members/TriplesMemS17' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS17} alt="린 이미지" />
                            <div>
                                <h4>린</h4>
                            </div>
                        </article>
                    </a>


                    <a href='http://localhost:8080/members/TriplesMemS18' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS18} alt="주빈 이미지" />
                            <div>
                                <h4>주빈</h4>
                            </div>
                        </article>
                    </a>

                    <a href='http://localhost:8080/members/TriplesMemS19' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS19} alt="정하연 이미지" />
                            <div>
                                <h4>정하연</h4>
                            </div>
                        </article>
                    </a>

                    <a href='http://localhost:8080/members/TriplesMemS20' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS20} alt="박시온 이미지" />
                            <div>
                                <h4>박시온</h4>
                            </div>
                        </article>
                    </a>
                </section>

                <section className='tri_m_mem_tr4'>
                    <a href='http://localhost:8080/members/TriplesMemS21' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS21} alt="김채원 이미지" />
                            <div>
                                <h4>김채원</h4>
                            </div>
                        </article>
                    </a>

                    <a href='http://localhost:8080/members/TriplesMemS22' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS22} alt="설린 이미지" />
                            <div>
                                <h4>설린</h4>
                            </div>
                        </article>
                    </a>

                    <a href='http://localhost:8080/members/TriplesMemS23' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS23} alt="서아 이미지" />
                            <div>
                                <h4>서아</h4>
                            </div>
                        </article>
                    </a>

                    <a href='http://localhost:8080/members/TriplesMemS24' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS24} alt="지연 이미지" />
                            <div>
                                <h4>지연</h4>
                            </div>
                        </article>
                    </a>
                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile">
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
            </section>
            <section className='tri_m_h2'>
                <h2>▪ 유닛 ▪</h2>
            </section>
            <section className='tri_m_mem_tr_full'>
                <section className='tri_m_mem_tr4'>
                    <Link to='/TriplesAcidAngelFromAsiaMain' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesUnitAcidAngelFromAsia_m_img} alt="Acid Angel from Asia" />
                            <div>
                                <h4>Acid<br />Angel<br />from<br />Asia</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesKRystalEyesMain' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesUnitKrystalEyes_m_img} alt="+&#40;KR&#41;ystal Eyes" />
                            <div>
                                <h4>+&#40;KR&#41;ystal Eyes</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesAcidEyesMain' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesUnitAcidEyes} alt="Acid Eyes" />
                            <div>
                                <h4>Acid Eyes</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesLOVElutionMain' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesUnitLoveLution_m_img} alt="LOVElution" />
                            <div>
                                <h4>LOVElution</h4>
                            </div>
                        </article>
                    </Link>
                </section>
                <section className='tri_m_mem_tr4'>
                    <Link to='/TriplesEvolutionMain' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesUnitEvoLution_m_img} alt="EVOLution" />
                            <div>
                                <h4>EVOLution</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesNxtMain' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesUnitNxt_m_img} alt="NXT" />
                            <div>
                                <h4>NXT</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesGlowMain' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesUnitGlow_m_img} alt="Glow" />
                            <div>
                                <h4>Glow</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesAriaMain' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesUnitAria_m_img} alt="Aria" />
                            <div>
                                <h4>Aria</h4>
                            </div>
                        </article>
                    </Link>
                </section>
                <section className='tri_m_mem_tr4'>
                    <Link to='/TriplesVisionaryVisionMain' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesUnitVisionaryVision_m_img} alt="Visionary Vision" />
                            <div>
                                <h4>Visionary Vision</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesHatchMain' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesUnitHatch_m_img} alt="∞! &#40;Hatch!&#41;" />
                            <div>
                                <h4>∞! &#40;Hatch!&#41;</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesAlphieMain' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesUnitAlphie_m_img} alt="Alphie" />
                            <div>
                                <h4>Alphie</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesNeptuneMain' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesUnitNeptune_m_img} alt="neptune" />
                            <div>
                                <h4>neptune</h4>
                            </div>
                        </article>
                    </Link>
                </section>
                <section className='tri_m_mem_tr4'>
                    <Link to='/TriplesMoonMain' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesUnitMoon_m_img} alt="moon" />
                            <div>
                                <h4>moon</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesSunMain' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesUnitSun_m_img} alt="sun" />
                            <div>
                                <h4>sun</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesZenithMain' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesUnitZenith_m_img} alt="zenith" />
                            <div>
                                <h4>zenith</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMsnzMain' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesUnitMsnz_m_img} alt="msnz" />
                            <div>
                                <h4>msnz</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            {/* 모바일 유닛 보기 */}
            <section className="tri_m_units_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesAcidAngelFromAsiaMain' className='tri_m_units_a'>
                            <img src={TriplesUnitAcidAngelFromAsia_m_img} alt="Acid Angel from Asia" />
                            <h4>Acid...</h4>
                        </Link>
                        <Link to='/TriplesKRystalEyesMain' className='tri_m_units_a'>
                            <img src={TriplesUnitKrystalEyes_m_img} alt="+&#40;KR&#41;ystal Eyes" />
                            <h4>+&#40;KR&#41;ystal...</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesAcidEyesMain' className='tri_m_units_a'>
                            <img src={TriplesUnitAcidEyes} alt="Acid Eyes" />
                            <h4>Acid Eyes</h4>
                        </Link>
                        <Link to='/TriplesLOVElutionMain' className='tri_m_units_a'>
                            <img src={TriplesUnitLoveLution_m_img} alt="LOVElution" />
                            <h4>LOVElution</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesEvolutionMain' className='tri_m_units_a'>
                            <img src={TriplesUnitEvoLution_m_img} alt="EVOLution" />
                            <h4>EVOLution</h4>
                        </Link>
                        <Link to='/TriplesNxtMain' className='tri_m_units_a'>
                            <img src={TriplesUnitNxt_m_img} alt="NXT" />
                            <h4>NXT</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesGlowMain' className='tri_m_units_a'>
                            <img src={TriplesUnitGlow_m_img} alt="Glow" />
                            <h4>Glow</h4>
                        </Link>
                        <Link to='/TriplesAriaMain' className='tri_m_units_a'>
                            <img src={TriplesUnitAria_m_img} alt="Aria" />
                            <h4>Aria</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesVisionaryVisionMain' className='tri_m_units_a'>
                            <img src={TriplesUnitVisionaryVision_m_img} alt="Visionary Vision" />
                            <h4>Visionary...</h4>
                        </Link>
                        <Link to='/TriplesHatchMain' className='tri_m_units_a'>
                            <img src={TriplesUnitHatch_m_img} alt="∞! &#40;Hatch!&#41;" />
                            <h4>∞! &#40;Hatch!&#41;</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesAlphieMain' className='tri_m_units_a'>
                            <img src={TriplesUnitAlphie_m_img} alt="Alphie" />
                            <h4>Alphie</h4>
                        </Link>
                        <Link to='/TriplesNeptuneMain' className='tri_m_units_a'>
                            <img src={TriplesUnitNeptune_m_img} alt="neptune" />
                            <h4>neptune</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesMoonMain' className='tri_m_units_a'>
                            <img src={TriplesUnitMoon_m_img} alt="moon" />
                            <h4>moon</h4>
                        </Link>
                        <Link to='/TriplesSunMain' className='tri_m_units_a'>
                            <img src={TriplesUnitSun_m_img} alt="sun" />
                            <h4>sun</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TriplesZenithMain' className='tri_m_units_a'>
                            <img src={TriplesUnitZenith_m_img} alt="zenith" />
                            <h4>zenith</h4>
                        </Link>
                        <Link to='/TriplesMsnzMain' className='tri_m_units_a'>
                            <img src={TriplesUnitMsnz_m_img} alt="msnz" />
                            <h4>msnz</h4>
                        </Link>
                    </section>
                </section>

            </section>

            <section className='tri_m_h2'>
                <h2 className='tri_m_h2'>▪ 이벤트 ▪</h2>
            </section>
            <section className='tri_m_mem_tr_full'>
                <section className='tri_m_mem_tr1'>
                    <Link to='/TriplesEvent' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_img} alt="triples event" />
                            <div>
                                <h4>baby<br />
                                    flower<br />
                                    이벤트</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            {/* 여기까지 일단함 ##### */}

            {/* 이벤트 모바일 보기 */}
            <section className='tri_m_event_tr_full_mobile'>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/TriplesEvent' className='tri_m_event_a'>
                            <img src={Tri_m_img} alt="triples event" />
                            <h4>baby...
                            </h4>
                        </Link>
                    </section>
                </section>
            </section>

            <h2 className='tri_m_h2 tri_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/TriplesBabyFlowerCityRemixesAlbum' className='tri_m_album_a'>
                        <article className='tri_m_albums'>
                            <img src={TriplesBabyFlowerCityRemixesAlbum_img} alt="Baby Flower City Remixes" />
                            <div>
                                <h4>
                                    &lt;Baby Flower City Remixes&gt;
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 tri_m_h2_6'>▪ sns ▪</h2>
            <section className='tri_m_sns_tr_full'>
                <section className='tri_m_album_tr'>
                    <a href="https://www.instagram.com/triplescosmos" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={TriplesInstagram_img} alt="트리플에스 인스타그램" />
                            <div>
                                <h4>
                                    인스타그램
                                </h4>
                            </div>
                        </article>
                    </a>
                    <a href="https://www.youtube.com/@triplescosmos" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={TriplesYoutube_img} alt="트리플에스 유튜브" />
                            <div>
                                <h4>
                                    유튜브
                                </h4>
                            </div>
                        </article>
                    </a>
                </section>
            </section>

            <h2 className='tri_m_h2 tri_m_h2_7'>▪ 등록 앨범 목록 보기 ▪</h2>
            <section className='tri_m_before_album_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/TriplesBabyFlowerCityRemixesAlbum' className='tri_m_before_album_a'>
                        <article className='tri_m_albums'>
                            <img src={Tri_m_img} alt="트리플에스" />
                            <div>
                                <h4>
                                    tripleS<br />
                                    앨범 목록
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 tri_m_h2_8'>▪ tripleS 과거?? 페이지 목록 ▪</h2>
            <section className='tri_m_before_page_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/TriplesBabyFlowerCityRemixesAlbum' className='tri_m_before_album_a'>
                        <article className='tri_m_albums'>
                            <img src={Tri_m_img} alt="트리플에스" />
                            <div>
                                <h4>
                                    tripleS<br />
                                    앨범 목록
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

