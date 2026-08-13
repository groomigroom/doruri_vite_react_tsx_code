import { Link } from "react-router-dom";
import { DoruriDocumentTitle } from "../../../DoruriDocumentTitle";

import '../TriplesMain.css';
import './TriplesMain20250512End.css';

import Menu from "../../../Menu";

import tri_20250512_m_logo from './img/Triples_2025_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
import Tri_20250512_m_img from './img/TriplesMain20250512End_m_img.jpg';

import Tri_20250512_m_memS1_img from './triples_20250512_img/triples_20250512_s1_m_img.jpg';
import Tri_20250512_m_memS2_img from './triples_20250512_img/triples_20250512_s2_m_img.jpg';
import Tri_20250512_m_memS3_img from './triples_20250512_img/triples_20250512_s3_m_img.jpg';
import Tri_20250512_m_memS4_img from './triples_20250512_img/triples_20250512_s4_m_img.jpg';
import Tri_20250512_m_memS5_img from './triples_20250512_img/triples_20250512_s5_m_img.jpg';
import Tri_20250512_m_memS6_img from './triples_20250512_img/triples_20250512_s6_m_img.jpg';
import Tri_20250512_m_memS7_img from './triples_20250512_img/triples_20250512_s7_m_img.jpg';
import Tri_20250512_m_memS8_img from './triples_20250512_img/triples_20250512_s8_m_img.jpg';
import Tri_20250512_m_memS9_img from './triples_20250512_img/triples_20250512_s9_m_img.jpg';
import Tri_20250512_m_memS10_img from './triples_20250512_img/triples_20250512_s10_m_img.jpg';
import Tri_20250512_m_memS11_img from './triples_20250512_img/triples_20250512_s11_m_img.jpg';
import Tri_20250512_m_memS12_img from './triples_20250512_img/triples_20250512_s12_m_img.jpg';
import Tri_20250512_m_memS13_img from './triples_20250512_img/triples_20250512_s13_m_img.jpg';
import Tri_20250512_m_memS14_img from './triples_20250512_img/triples_20250512_s14_m_img.jpg';
import Tri_20250512_m_memS15_img from './triples_20250512_img/triples_20250512_s15_m_img.jpg';
import Tri_20250512_m_memS16_img from './triples_20250512_img/triples_20250512_s16_m_img.jpg';
import Tri_20250512_m_memS17_img from './triples_20250512_img/triples_20250512_s17_m_img.jpg';
import Tri_20250512_m_memS18_img from './triples_20250512_img/triples_20250512_s18_m_img.jpg';
import Tri_20250512_m_memS19_img from './triples_20250512_img/triples_20250512_s19_m_img.jpg';
import Tri_20250512_m_memS20_img from './triples_20250512_img/triples_20250512_s20_m_img.jpg';
import Tri_20250512_m_memS21_img from './triples_20250512_img/triples_20250512_s21_m_img.jpg';
import Tri_20250512_m_memS22_img from './triples_20250512_img/triples_20250512_s22_m_img.jpg';
import Tri_20250512_m_memS23_img from './triples_20250512_img/triples_20250512_s23_m_img.jpg';
import Tri_20250512_m_memS24_img from './triples_20250512_img/triples_20250512_s24_m_img.jpg';

export default function TriplesMain20250512End() {
    DoruriDocumentTitle('tripleS');

    return (
        <div className="tri_20250512_m_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMain20250512End' className="on">한국어</Link>
                <Link to='/TriplesMain20250512EndEng'>English</Link>
            </section>
            <img src={tri_20250512_m_logo} alt="트리플에스 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />tripleS<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                행복하고 싶은 마음을<br />
                담아서 열심히<br />
                노래해 볼게요!
            </p>
            <img src={Tri_20250512_m_img} className='tri_m_img' alt='트리플에스 이미지' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full'>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS1_img} alt="윤서연 이미지" />
                            <div>
                                <h4>윤서연</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS2'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS2_img} alt="정혜린 이미지" />
                            <div>
                                <h4>정혜린</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS3'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS3_img} alt="이지우 이미지" />
                            <div>
                                <h4>이지우</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS4'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS4_img} alt="김채연 이미지" />
                            <div>
                                <h4>김채연</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS5'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS5_img} alt="김유연 이미지" />
                            <div>
                                <h4>김유연</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS6'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS6_img} alt="김수민 이미지" />
                            <div>
                                <h4>김수민</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS7'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS7_img} alt="김나경 이미지" />
                            <div>
                                <h4>김나경</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS8'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS8_img} alt="공유빈 이미지" />
                            <div>
                                <h4>공유빈</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS9'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS9_img} alt="카에데 이미지" />
                            <div>
                                <h4>카에데</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS10'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS10_img} alt="서다현 이미지" />
                            <div>
                                <h4>서다현</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS11'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS11_img} alt="코토네 이미지" />
                            <div>
                                <h4>코토네</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS12'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS12_img} alt="곽연지 이미지" />
                            <div>
                                <h4>곽연지</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS13'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS13_img} alt="니엔 이미지" />
                            <div>
                                <h4>니엔</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS14'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS14_img} alt="박소현 이미지" />
                            <div>
                                <h4>박소현</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS15'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS15_img} alt="신위 이미지" />
                            <div>
                                <h4>신위</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS16'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS16_img} alt="마유 이미지" />
                            <div>
                                <h4>마유</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS17'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS17_img} alt="린 이미지" />
                            <div>
                                <h4>린</h4>
                            </div>
                        </article>
                    </Link>


                    <Link to='/TriplesMemS18'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS18_img} alt="주빈 이미지" />
                            <div>
                                <h4>주빈</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS19'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS19_img} alt="정하연 이미지" />
                            <div>
                                <h4>정하연</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS20'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS20_img} alt="박시온 이미지" />
                            <div>
                                <h4>박시온</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS21'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS21_img} alt="김채원 이미지" />
                            <div>
                                <h4>김채원</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS22'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS22_img} alt="설린 이미지" />
                            <div>
                                <h4>설린</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS23'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS23_img} alt="서아 이미지" />
                            <div>
                                <h4>서아</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS24'>
                        <article className='tri_m_mem'>
                            <img src={Tri_20250512_m_memS24_img} alt="지연 이미지" />
                            <div>
                                <h4>지연</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>
            <h2 className='tri_m_h2 tri_m_h2_3'>▪ 유닛 ▪</h2>
            <section className='tri_m_units_tr_full'>
                <section className='tri_m_units_tr4'>
                    <Link to='/TriplesAcidAngelFromAsiaMain' className='tri_m_units_a'>
                        <article className='tri_m_units'>
                            <img src={""} alt="Acid Angel from Asia" />
                            <div>
                                <h4>Acid<br />Angel<br />from<br />Asia</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesKRystalEyesMain' className='tri_m_units_a'>
                        <article className='tri_m_units'>
                            <img src={""} alt="+&#40;KR&#41;ystal Eyes" />
                            <div>
                                <h4>+&#40;KR&#41;ystal Eyes</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesAcidEyesMain' className='tri_m_units_a'>
                        <article className='tri_m_units'>
                            <img src={""} alt="Acid Eyes" />
                            <div>
                                <h4>Acid Eyes</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesLOVElutionMain' className='tri_m_units_a'>
                        <article className='tri_m_units'>
                            <img src={""} alt="LOVElution" />
                            <div>
                                <h4>LOVElution</h4>
                            </div>
                        </article>
                    </Link>
                </section>
                <section className='tri_m_units_tr4'>
                    <Link to='/TriplesEvolutionMain' className='tri_m_units_a'>
                        <article className='tri_m_units'>
                            <img src={""} alt="EVOLution" />
                            <div>
                                <h4>EVOLution</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesNxtMain' className='tri_m_units_a'>
                        <article className='tri_m_units'>
                            <img src={""} alt="NXT" />
                            <div>
                                <h4>NXT</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesGlowMain' className='tri_m_units_a'>
                        <article className='tri_m_units'>
                            <img src={""} alt="Glow" />
                            <div>
                                <h4>Glow</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesAriaMain' className='tri_m_units_a'>
                        <article className='tri_m_units'>
                            <img src={""} alt="Aria" />
                            <div>
                                <h4>Aria</h4>
                            </div>
                        </article>
                    </Link>
                </section>
                <section className='tri_m_units_tr4'>
                    <Link to='/TriplesVisionaryVisionMain' className='tri_m_units_a'>
                        <article className='tri_m_units'>
                            <img src={""} alt="Visionary Vision" />
                            <div>
                                <h4>Visionary Vision</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesHatchMain' className='tri_m_units_a'>
                        <article className='tri_m_units'>
                            <img src={""} alt="∞! &#40;Hatch!&#41;" />
                            <div>
                                <h4>∞! &#40;Hatch!&#41;</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesAlphieMain' className='tri_m_units_a'>
                        <article className='tri_m_units'>
                            <img src={""} alt="Alphie" />
                            <div>
                                <h4>Alphie</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesNeptuneMain' className='tri_m_units_a'>
                        <article className='tri_m_units'>
                            <img src={""} alt="neptune" />
                            <div>
                                <h4>neptune</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>
        </div>
    );
}
