import { Link } from 'react-router-dom';

import '../../main/TriplesMain.css';
import './TriplesZenithMain.css';

import Menu from '../../../Menu';

import TriplesZen_m_logo from './img/TriplesZenith_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
import TriplesZen_m_img from './img/TriplesZenith_m_img.jpg';

import TriplesSun_m_S3_img from '../../main/img/tri_m_memS3.jpg';
import TriplesSun_m_S6_img from '../../main/img/tri_m_memS6.jpg';
import TriplesSun_m_S8_img from '../../main/img/tri_m_memS8.jpg';
import TriplesSun_m_S12_img from '../../main/img/tri_m_memS12.jpg';
import TriplesSun_m_S18_img from '../../main/img/tri_m_memS18.jpg';
import TriplesSun_m_S19_img from '../../main/img/tri_m_memS19.jpg';




//#a2bf99

export default function TriplesZenithMain() {
    return (
        <div className='tri_zen_m_full'>
            <Menu />
            <img src={TriplesZen_m_logo} alt="tri_Zenith 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_Zenith 로고 꾸미기" />zenith<img src={MainH2Deco} alt="tri_zenith 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;zenith&apos;와 함께<br />
                대답해줘<br />
                Answer My Question!
            </p>
            <img src={TriplesZen_m_img} className='tri_m_img tri_zen_m_img' alt='tri_zen' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_zen_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS3' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesSun_m_S3_img} alt="이지우 이미지" />
                            <h4>이지우</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS6' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesSun_m_S6_img} alt="김수민 이미지" />
                            <h4>김수민</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS8' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesSun_m_S8_img} alt="공유빈 이미지" />
                            <h4>공유빈</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS12' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesSun_m_S12_img} alt="곽연지 이미지" />
                            <h4>곽연지</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS18' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesSun_m_S18_img} alt="주빈 이미지" />
                            <h4>주빈</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS19' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesSun_m_S19_img} alt="정하연 이미지" />
                            <h4>정하연</h4>
                        </article>
                    </Link>

                </section>


            </section>


        </div>
    );
};

