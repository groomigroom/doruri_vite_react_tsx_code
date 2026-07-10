import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css';

import Tri_m_logo from '../../triples/main/img/tri_m_logo.svg';
import Tri_m_img from '../../triples/main/img/tri_m_img.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

import MenuEng from '../../HomeEng/MenuEng';

import Tri_m_memS1 from '../../triples/main/img/tri_m_memS1.jpg';
import Tri_m_memS2 from '../../triples/main/img/tri_m_memS2.jpg';
import Tri_m_memS3 from '../../triples/main/img/tri_m_memS3.jpg';
import Tri_m_memS4 from '../../triples/main/img/tri_m_memS4.jpg';
import Tri_m_memS5 from '../../triples/main/img/tri_m_memS5.jpg';
import Tri_m_memS6 from '../../triples/main/img/tri_m_memS6.jpg';
import Tri_m_memS7 from '../../triples/main/img/tri_m_memS7.jpg';
import Tri_m_memS8 from '../../triples/main/img/tri_m_memS8.jpg';
import Tri_m_memS9 from '../../triples/main/img/tri_m_memS9.jpg';
import Tri_m_memS10 from '../../triples/main/img/tri_m_memS10.jpg';
import Tri_m_memS11 from '../../triples/main/img/tri_m_memS11.jpg';
import Tri_m_memS12 from '../../triples/main/img/tri_m_memS12.jpg';
import Tri_m_memS13 from '../../triples/main/img/tri_m_memS13.jpg';
import Tri_m_memS14 from '../../triples/main/img/tri_m_memS14.jpg';
import Tri_m_memS15 from '../../triples/main/img/tri_m_memS15.jpg';
import Tri_m_memS16 from '../../triples/main/img/tri_m_memS16.jpg';
import Tri_m_memS17 from '../../triples/main/img/tri_m_memS17.jpg';
import Tri_m_memS18 from '../../triples/main/img/tri_m_memS18.jpg';
import Tri_m_memS19 from '../../triples/main/img/tri_m_memS19.jpg';
import Tri_m_memS20 from '../../triples/main/img/tri_m_memS20.jpg';
import Tri_m_memS21 from '../../triples/main/img/tri_m_memS21.jpg';
import Tri_m_memS22 from '../../triples/main/img/tri_m_memS22.jpg';
import Tri_m_memS23 from '../../triples/main/img/tri_m_memS23.jpg';
import Tri_m_memS24 from '../../triples/main/img/tri_m_memS24.jpg';

export default function TriplesMainEng() {
    return (
        <div className='tri_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMain'>한국어</Link>
                <Link to='/TriplesMainEng' className="on">English</Link>
            </section>
            <img src={Tri_m_logo} alt="트리플에스 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />tripleS<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                We are one and twenty-four.<br />
                Even if wounds, hardships, and tears block the road<br />
                Let&apos;s look up with &apos;tripleS&apos;.
            </p>
            <img src={Tri_m_img} className='tri_m_img' alt='트리플에스 이미지' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='tri_m_mem_tr_full'>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS1Eng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS1} alt="Yoon SeoYeon image" />
                            <h4>Yoon SeoYeon</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS2Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS2} alt="Jeong HyeRin image" />
                            <h4>Jeong HyeRin</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS3Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS3} alt="Lee JiWoo image" />
                            <h4>Lee JiWoo</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS4Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS4} alt="Kim ChaeYeon image" />
                            <h4>Kim ChaeYeon</h4>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS5Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS5} alt="Kim YooYeon image" />
                            <h4>Kim YooYeon</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS6Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS6} alt="Kim SooMin image" />
                            <h4>Kim SooMin</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS7Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS7} alt="Kim NaKyoung image" />
                            <h4>Kim NaKyoung</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS8Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS8} alt="Gong YuBin image" />
                            <h4>Gong YuBin</h4>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS9Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS9} alt="Kaede image" />
                            <h4>Kaede</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS10Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS10} alt="Seo DaHyun image" />
                            <h4>Seo DaHyun</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS11Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS11} alt="Kotone image" />
                            <h4>Kotone</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS12Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS12} alt="Kwak YeonJi image" />
                            <h4>Kwak YeonJi</h4>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS13Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS13} alt="Nien image" />
                            <h4>Nien</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS14Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS14} alt="Park SoHyun image" />
                            <h4>Park SoHyun</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS15Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS15} alt="Xinyu image" />
                            <h4>Xinyu</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS16Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS16} alt="Mayu image" />
                            <h4>Mayu</h4>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS17Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS17} alt="Lynn image" />
                            <h4>Lynn</h4>
                        </article>
                    </Link>


                    <Link to='/TriplesMemS18Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS18} alt="JooBin image" />
                            <h4>JooBin</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS19Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS19} alt="Jeong HaYeon image" />
                            <h4>Jeong HaYeon</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS20Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS20} alt="Park ShiOn image" />
                            <h4>Park ShiOn</h4>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS21Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS21} alt="Kim ChaeWon image" />
                            <h4>Kim ChaeWon</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS22Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS22} alt="Sullin image" />
                            <h4>Sullin</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS23Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS23} alt="SeoAh image" />
                            <h4>SeoAh</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS24Eng'>
                        <article className='tri_m_mem'>
                            <img src={Tri_m_memS24} alt="JiYeon image" />
                            <h4>JiYeon</h4>
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



