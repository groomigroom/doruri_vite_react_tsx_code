import { Link } from 'react-router-dom';

import '../../main/TriplesMain.css';
import './TriplesNeptuneMain.css';

import Menu from '../../../Menu';

import TriplesNep_m_logo from './img/TriplesNeptune_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
import TriplesNep_m_img from './img/TriplesNeptune_m_img.jpg';

import TriplesNep_m_S1_img from '../../main/img/tri_m_memS1.jpg';
import TriplesNep_m_S7_img from '../../main/img/tri_m_memS7.jpg';
import TriplesNep_m_S10_img from '../../main/img/tri_m_memS10.jpg';
import TriplesNep_m_S11_img from '../../main/img/tri_m_memS11.jpg';
import TriplesNep_m_S13_img from '../../main/img/tri_m_memS13.jpg';
import TriplesNep_m_S23_img from '../../main/img/tri_m_memS23.jpg';

//#99ACCC

export default function TriplesNeptuneMain() {
    return (
        <div className='tri_nep_m_full'>
            <Menu />
            <img src={TriplesNep_m_logo} alt="tri_nep 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_neptune 로고 꾸미기" />neptune<img src={MainH2Deco} alt="tri_neptune 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;neptune&apos;과 함께<br />
                지금 내 기분을 묻는다면<br />
                구름 위를 걷는 기분!
            </p>
            <img src={TriplesNep_m_img} className='tri_m_img tri_nep_m_img' alt='tri_neptune' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_nep_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesNep_m_S1_img} alt="윤서연 이미지" />
                            <h4>윤서연</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS7' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesNep_m_S7_img} alt="김나경 이미지" />
                            <h4>김나경</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS10' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesNep_m_S10_img} alt="서다현 이미지" />
                            <h4>서다현</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS11' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesNep_m_S11_img} alt="코토네 이미지" />
                            <h4>코토네</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS13' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesNep_m_S13_img} alt="니엔 이미지" />
                            <h4>니엔</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS23' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesNep_m_S23_img} alt="서아 이미지" />
                            <h4>서아</h4>
                        </article>
                    </Link>

                </section>


            </section>


        </div>
    );
};







