import { Link } from 'react-router-dom';

import '../../main/TriplesMain.css';
import './TriplesGlowMain.css';

import Menu from '../../../Menu';

import TriplesGlow_m_logo from './img/TriplesGlow_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
// import TriplesAAA_m_img from './img/TriAaa_m_img.jpg';



//000000

export default function TriplesGlowMain() {
    return (
        <div className='tri_glo_m_full'>
            <Menu />
            <img src={TriplesGlow_m_logo} alt="tri_glow 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_glow 로고 꾸미기" />Glow<img src={MainH2Deco} alt="tri_glow 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;Acid Angel from Asia&apos;와 함께<br />
                ########여기에서 Together<br />
                무질서한 그대로
            </p>
            <img src="" className='tri_m_img tri_glo_m_img' alt='tri_glow' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_glo_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS21' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="김채원 이미지" />
                            <h4>김채원</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS22' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="설린 이미지" />
                            <h4>설린</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS23' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="서아 이미지" />
                            <h4>서아</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS24' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="지연 이미지" />
                            <h4>지연</h4>
                        </article>
                    </Link>


                </section>


            </section>


        </div>
    );
};



