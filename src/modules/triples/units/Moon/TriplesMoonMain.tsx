import { Link } from 'react-router-dom';

import '../../main/TriplesMain.css';
import './TriplesMoonMain.css';

import Menu from '../../../Menu';

import TriplesMoon_m_logo from './img/TriplesMoon_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
import TriplesMoon_m_img from './img/TriplesMoon_m_img.jpg';

import TriplesMoon_m_S9_img from '../../main/img/tri_m_memS9.jpg';
import TriplesMoon_m_S14_img from '../../main/img/tri_m_memS14.jpg';
import TriplesMoon_m_S17_img from '../../main/img/tri_m_memS17.jpg';
import TriplesMoon_m_S20_img from '../../main/img/tri_m_memS20.jpg';
import TriplesMoon_m_S22_img from '../../main/img/tri_m_memS22.jpg';
import TriplesMoon_m_S24_img from '../../main/img/tri_m_memS24.jpg';


//#e7cb82

export default function TriplesMoonMain() {
    return (
        <div className='tri_moo_m_full'>
            <Menu />
            <img src={TriplesMoon_m_logo} alt="tri_nep 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_moon 로고 꾸미기" />moon<img src={MainH2Deco} alt="tri_moon 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;moon&apos;과 함께<br />
                Come & Go, Cameo<br />
                Now You See Me!
            </p>
            <img src={TriplesMoon_m_img} className='tri_m_img tri_moo_m_img' alt='tri_moon' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_moo_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS9' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesMoon_m_S9_img} alt="카에데 이미지" />
                            <h4>카에데</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS14' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesMoon_m_S14_img} alt="박소현 이미지" />
                            <h4>박소현</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS17' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesMoon_m_S17_img} alt="린 이미지" />
                            <h4>린</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS20' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesMoon_m_S20_img} alt="박시온 이미지" />
                            <h4>박시온</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS22' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesMoon_m_S22_img} alt="설린 이미지" />
                            <h4>설린</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS24' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesMoon_m_S24_img} alt="지연 이미지" />
                            <h4>지연</h4>
                        </article>
                    </Link>

                </section>


            </section>


        </div>
    );
};





