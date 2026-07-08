import { Link } from 'react-router-dom';

import '../../main/TriplesMain.css';
import './TriplesHatchMain.css';

import Menu from '../../../Menu';

import TriplesHat_m_logo from './img/TriplesHatch_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
// import TriplesEvo_m_img from './img/TriplesEvolution_m_img.jpg';


//#000000

export default function TriplesHatchMain() {
    return (
        <div className='tri_hat_m_full'>
            <Menu />
            <img src={TriplesHat_m_logo} alt="tri_hat 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_hat 로고 꾸미기" />∞! &#40;Hatch!&#41;<img src={MainH2Deco} alt="tri_hat 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;∞! &#40;Hatch!&#41;&apos;와 함께<br />
                Password의 운명을 풀어서<br />
                새로운 시작해 봐요!
            </p>
            <img src="" className='tri_m_img tri_hat_m_img' alt='tri_hat' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_hat_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS3' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="이지우 이미지" />
                            <h4>이지우</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS4' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="김채연 이미지" />
                            <h4>김채연</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS5' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="김유연 이미지" />
                            <h4>김유연</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS6' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="김수민 이미지" />
                            <h4>김수민</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS11' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="코토네 이미지" />
                            <h4>코토네</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS16' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="마유 이미지" />
                            <h4>마유</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS20' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="박시온 이미지" />
                            <h4>박시온</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS21' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="김채원 이미지" />
                            <h4>김채원</h4>
                        </article>
                    </Link>


                </section>


            </section>


        </div>
    );
};



