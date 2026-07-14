import { Link } from 'react-router-dom';

import './TriplesMain.css';

import Tri_m_logo from './img/tri_m_logo.svg';
import Tri_m_img from './img/tri_m_img.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

import Menu from '../../Menu';

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

export default function TriplesMain() {
    return (
        <div className='tri_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMain' className="on">한국어</Link>
                <Link to='/TriplesMainEng'>English</Link>
            </section>
            <img src={Tri_m_logo} alt="트리플에스 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />tripleS<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>우리는 하나이자 스물넷입니다.<br />
                상처, 고난, 또 눈물이 길을 막아도<br />
                &apos;트리플에스&apos;와 함께 고개를 들어 보아요.
            </p>
            <img src={Tri_m_img} className='tri_m_img' alt='트리플에스 이미지' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full'>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS1} alt="윤서연 이미지" />
                            <div>
                                <h4>윤서연</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS2'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS2} alt="정혜린 이미지" />
                            <div>
                                <h4>정혜린</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS3'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS3} alt="이지우 이미지" />
                            <div>
                                <h4>이지우</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS4'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS4} alt="김채연 이미지" />
                            <div>
                                <h4>김채연</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS5'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS5} alt="김유연 이미지" />
                            <div>
                                <h4>김유연</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS6'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS6} alt="김수민 이미지" />
                            <div>
                                <h4>김수민</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS7'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS7} alt="김나경 이미지" />
                            <div>
                                <h4>김나경</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS8'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS8} alt="공유빈 이미지" />
                            <div>
                                <h4>공유빈</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS9'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS9} alt="카에데 이미지" />
                            <div>
                                <h4>카에데</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS10'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS10} alt="서다현 이미지" />
                            <div>
                                <h4>서다현</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS11'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS11} alt="코토네 이미지" />
                            <div>
                                <h4>코토네</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS12'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS12} alt="곽연지 이미지" />
                            <div>
                                <h4>곽연지</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS13'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS13} alt="니엔 이미지" />
                            <div>
                                <h4>니엔</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS14'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS14} alt="박소현 이미지" />
                            <div>
                                <h4>박소현</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS15'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS15} alt="신위 이미지" />
                            <div>
                                <h4>신위</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS16'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS16} alt="마유 이미지" />
                            <div>
                                <h4>마유</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS17'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS17} alt="린 이미지" />
                            <div>
                                <h4>린</h4>
                            </div>
                        </article>
                    </Link>


                    <Link to='/TriplesMemS18'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS18} alt="주빈 이미지" />
                            <div>
                                <h4>주빈</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS19'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS19} alt="정하연 이미지" />
                            <div>
                                <h4>정하연</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS20'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS20} alt="박시온 이미지" />
                            <div>
                                <h4>박시온</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS21'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS21} alt="김채원 이미지" />
                            <div>
                                <h4>김채원</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS22'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS22} alt="설린 이미지" />
                            <div>
                                <h4>설린</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS23'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS23} alt="서아 이미지" />
                            <div>
                                <h4>서아</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS24'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS24} alt="지연 이미지" />
                            <div>
                                <h4>지연</h4>
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

