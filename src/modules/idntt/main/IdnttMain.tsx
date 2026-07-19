import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css';
import './IdnttMain.css';

// import Tri_m_logo from './img/tri_m_logo.svg';
// import Tri_m_img from './img/tri_m_img.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

import Menu from '../../Menu';

// import Idn_m_memid1 from './img/tri_m_memS1.jpg';
// import Idn_m_memid2 from './img/tri_m_memS2.jpg';
// import Idn_m_memid3 from './img/tri_m_memS3.jpg';
// import Idn_m_memid4 from './img/tri_m_memS4.jpg';
// import Idn_m_memid5 from './img/tri_m_memS5.jpg';
// import Idn_m_memid6 from './img/tri_m_memS6.jpg';
// import Idn_m_memid7 from './img/tri_m_memS7.jpg';
// import Idn_m_memid8 from './img/tri_m_memS8.jpg';
// import Idn_m_memid9 from './img/tri_m_memS9.jpg';
// import Idn_m_memid10 from './img/tri_m_memS10.jpg';
// import Idn_m_memid11 from './img/tri_m_memS11.jpg';
// import Idn_m_memid12 from './img/tri_m_memS12.jpg';
// import Idn_m_memid13 from './img/tri_m_memS13.jpg';
// import Idn_m_memid14 from './img/tri_m_memS14.jpg';
// import Idn_m_memid15 from './img/tri_m_memS15.jpg';
// import Idn_m_memid16 from './img/tri_m_memS16.jpg';
// import Idn_m_memid17 from './img/tri_m_memS17.jpg';
// import Idn_m_memid18 from './img/tri_m_memS18.jpg';
// import Idn_m_memid19 from './img/tri_m_memS19.jpg';
// import Idn_m_memid20 from './img/tri_m_memS20.jpg';
// import Idn_m_memid21 from './img/tri_m_memS21.jpg';
// import Idn_m_memid22 from './img/tri_m_memS22.jpg';
// import Idn_m_memid23 from './img/tri_m_memS23.jpg';
// import Idn_m_memid24 from './img/tri_m_memS24.jpg';

export default function IdnttMain() {
    return (
        <div className='idn_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/IdnttMain' className="on">한국어</Link>
                <Link to='/IdnttMainEng'>English</Link>
            </section>
            <img src='' alt="idntt 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="idntt 로고 꾸미기" />idntt<img src={MainH2Deco} alt="idntt 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                #####우리는 하나이자 스물넷입니다.<br />
                상처, 고난, 또 눈물이 길을 막아도<br />
                &apos;트리플에스&apos;와 함께 고개를 들어 보아요.
            </p>
            <img src='' className='tri_m_img' alt='idntt 이미지' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full'>

                <section className='tri_m_mem_tr'>
                    <Link to='/Idn_m_memid1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="김도훈 이미지" />
                            <div>
                                <h4>김도훈</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/Idn_m_memid2'>
                        <article className='tri_m_mem'>
                            <img src='' alt="김희주 이미지" />
                            <div>
                                <h4>김희주</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/IdnttMain'>
                        <article className='tri_m_mem'>
                            <img src='' alt="id3" />
                            <div>
                                <h4>id3</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/Idn_m_memid4'>
                        <article className='tri_m_mem'>
                            <img src='' alt="최태인 이미지" />
                            <div>
                                <h4>최태인</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/Idn_m_memid5'>
                        <article className='tri_m_mem'>
                            <img src='' alt="이재영 이미지" />
                            <div>
                                <h4>이재영</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/Idn_m_memid6'>
                        <article className='tri_m_mem'>
                            <img src='' alt="김주호 이미지" />
                            <div>
                                <h4>김주호</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/Idn_m_memid7'>
                        <article className='tri_m_mem'>
                            <img src='' alt="남지운 이미지" />
                            <div>
                                <h4>남지운</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/Idn_m_memid8'>
                        <article className='tri_m_mem'>
                            <img src='' alt="이환희 이미지" />
                            <div>
                                <h4>이환희</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/Idn_m_memid9'>
                        <article className='tri_m_mem'>
                            <img src='' alt="이청명 이미지" />
                            <div>
                                <h4>이청명</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/Idn_m_memid10'>
                        <article className='tri_m_mem'>
                            <img src='' alt="토와 이미지" />
                            <div>
                                <h4>토와</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/Idn_m_memid11'>
                        <article className='tri_m_mem'>
                            <img src='' alt="이규혁 이미지" />
                            <div>
                                <h4>이규혁</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/Idn_m_memid12'>
                        <article className='tri_m_mem'>
                            <img src='' alt="박누리 이미지" />
                            <div>
                                <h4>박누리</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/Idn_m_memid13'>
                        <article className='tri_m_mem'>
                            <img src='' alt="김성준 이미지" />
                            <div>
                                <h4>김성준</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/Idn_m_memid14'>
                        <article className='tri_m_mem'>
                            <img src='' alt="한예준 이미지" />
                            <div>
                                <h4>한예준</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/Idn_m_memid15'>
                        <article className='tri_m_mem'>
                            <img src='' alt="최경빈 이미지" />
                            <div>
                                <h4>최경빈</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/Idn_m_memid16'>
                        <article className='tri_m_mem'>
                            <img src='' alt="황은수 이미지" />
                            <div>
                                <h4>황은수</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/Idn_m_memid17'>
                        <article className='tri_m_mem'>
                            <img src='' alt="곽기웅 이미지" />
                            <div>
                                <h4>곽기웅</h4>
                            </div>
                        </article>
                    </Link>


                    <Link to='/Idn_m_memid18'>
                        <article className='tri_m_mem'>
                            <img src='' alt="이주헌 이미지" />
                            <div>
                                <h4>이주헌</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/Idn_m_memid19'>
                        <article className='tri_m_mem'>
                            <img src='' alt="양경호 이미지" />
                            <div>
                                <h4>양경호</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/Idn_m_memid20'>
                        <article className='tri_m_mem'>
                            <img src='' alt="조은찬 이미지" />
                            <div>
                                <h4>조은찬</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/Idn_m_memid21'>
                        <article className='tri_m_mem'>
                            <img src='' alt="김은성 이미지" />
                            <div>
                                <h4>김은성</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/IdnttMain'>
                        <article className='tri_m_mem'>
                            <img src='' alt="id22" />
                            <div>
                                <h4>id22</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/IdnttMain'>
                        <article className='tri_m_mem'>
                            <img src='' alt="id23" />
                            <div>
                                <h4>id23</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/IdnttMain'>
                        <article className='tri_m_mem'>
                            <img src='' alt="id24" />
                            <div>
                                <h4>id24</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 tri_m_h2_3'>▪ 유닛 ▪</h2>

            <section className='tri_m_unit_tr_full'>
                <Link to='/TriplesAcidAngelFromAsiaMain'>Acid Angel from Asia </Link>
                <Link to='/TriplesKRystalEyesMain'>+&#40;KR&#41;ystal Eyes </Link>
                <Link to='/TriplesAcidEyesMain'>Acid Eyes </Link>
                <Link to='/TriplesLOVElutionMain'>LOVElution </Link>
                <Link to='/TriplesEvolutionMain'>EVOLution </Link>
                <Link to='/TriplesNxtMain'>NXT </Link>
                <Link to='/TriplesGlowMain'>Glow </Link>
                <Link to='/TriplesAriaMain'>Aria </Link>
                <Link to='/TriplesVisionaryVisionMain'>Visionary Vision </Link>
                <Link to='/TriplesHatchMain'>∞! &#40;Hatch!&#41; </Link>
                <Link to='/TriplesNeptuneMain'>neptune </Link>
                <Link to='/TriplesMoonMain'>moon </Link>
                <Link to='/TriplesSunMain'>sun </Link>
                <Link to='/TriplesZenithMain'>zenith </Link>
            </section>
            <p className='tri_m_copy_pp'>Copyright ⓒ ㈜모드하우스</p>
            <a href="https://www.instagram.com/triplescosmos" target='_blank' rel='noopener noreferrer' className='tri_m_a_ins'>
                <h3>트리플에스 인스타그램</h3>
            </a>
            <a href="https://www.youtube.com/@triplescosmos" target='_blank' rel='noopener noreferrer' className='tri_m_a_you'>
                <h3>트리플에스 유튜브</h3>
            </a>
            <Link to="/TriplesEvent" className='tri_m_e'>이벤트</Link>
        </div >
    );
};

idntt와 함께
turn it up,
turn it up!

