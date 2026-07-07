import { Link } from 'react-router-dom';

import '../../main/TriplesMain.css';
import './TriplesNxtMain.css';

import Menu from '../../../Menu';

import TriplesNxt_m_logo from './img/TriplesNxt_m_logo.png';
import MainH2Deco from '../../../img/main_h2_deco.png';
import TriplesNxt_m_img from './img/TriplesNxt_m_img.jpg';

import TriplesNxt_m_S17_img from './img/TriplesNxt_m_S17_img.jpg';
import TriplesNxt_m_S18_img from './img/TriplesNxt_m_S18_img.jpg';
import TriplesNxt_m_S19_img from './img/TriplesNxt_m_S19_img.jpg';
import TriplesNxt_m_S20_img from './img/TriplesNxt_m_S20_img.jpg';




//191919

export default function TriplesNxtMain() {
    return (
        <div className='tri_nxt_m_full'>
            <Menu />
            <img src={TriplesNxt_m_logo} alt="tri_nxt 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_NXT 로고 꾸미기" />NXT<img src={MainH2Deco} alt="tri_NXT 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;NXT&apos;와 함께<br />
                Do it, do it, do it,<br />
                do it, do it all!
            </p>
            <img src={TriplesNxt_m_img} className='tri_m_img tri_nxt_m_img' alt='tri_aaa' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_nxt_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS17' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesNxt_m_S17_img} alt="린 이미지" />
                            <h4>린</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS18' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesNxt_m_S18_img} alt="주빈 이미지" />
                            <h4>주빈</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS19' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesNxt_m_S19_img} alt="정하연 이미지" />
                            <h4>정하연</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS20' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesNxt_m_S20_img} alt="박시온 이미지" />
                            <h4>박시온</h4>
                        </article>
                    </Link>


                </section>


            </section>


        </div>
    );
};


