import { Link } from 'react-router-dom';

import '../../main/TriplesMain.css';
import './TriplesAriaMain.css';

import Menu from '../../../Menu';

import TriplesAria_m_logo from './img/TriplesAria_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
// import TriplesNxt_m_img from './img/TriplesNxt_m_img.jpg';



//191919

export default function TriplesAriaMain() {
    return (
        <div className='tri_ari_m_full'>
            <Menu />
            <img src={TriplesAria_m_logo} alt="tri_Aria 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_Aria 로고 꾸미기" />Aria<img src={MainH2Deco} alt="tri_Aria 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;Acid Angel from Asia&apos;와 함께<br />
                ########여기에서 Together<br />
                무질서한 그대로
            </p>
            <img src="" className='tri_m_img tri_ari_m_img' alt='tri_ari' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_ari_m_mem_tr_full'>
                <section className='tri_ari_m_mem_tr3'>
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
                    <Link to='/TriplesMemS9' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="카에데 이미지" />
                            <h4>카에데</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_ari_m_mem_tr2'>
                    <Link to='/TriplesMemS10' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="서다현 이미지" />
                            <h4>서다현</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS13' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="니엔 이미지" />
                            <h4>니엔</h4>
                        </article>
                    </Link>


                </section>


            </section>


        </div>
    );
};



