import { Link } from 'react-router-dom';

import '../../main/TriplesMain.css';
import './TriplesAcidEyesMain.css';

import Menu from '../../../Menu';

import TriplesAci_m_logo from './img/TriplesAci_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
import TriplesAci_m_img from './img/TriplesAci_m_img.jpg';

import TriplesAci_m_S1_img from './img/TriplesAci_m_S1_img.jpg';
import TriplesAci_m_S2_img from './img/TriplesAci_m_S2_img.jpg';
import TriplesAci_m_S3_img from './img/TriplesAci_m_S3_img.jpg';
import TriplesAci_m_S4_img from './img/TriplesAci_m_S4_img.jpg';
import TriplesAci_m_S5_img from './img/TriplesAci_m_S5_img.jpg';
import TriplesAci_m_S6_img from './img/TriplesAci_m_S6_img.jpg';
import TriplesAci_m_S7_img from './img/TriplesAci_m_S7_img.jpg';
import TriplesAci_m_S8_img from './img/TriplesAci_m_S8_img.jpg';

//#ff00fe

export default function TriplesAcidEyesMain() {
    return (
        <div className='tri_aci_m_full'>
            <Menu />
            <img src={TriplesAci_m_logo} alt="tri_aci 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_aci 로고 꾸미기" />Acid Eyes<img src={MainH2Deco} alt="tri_aci 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;Acid Eyes&apos;와 함께<br />
                여기에서 Together<br />
                Boom cherry talk!
            </p>
            <img src={TriplesAci_m_img} className='tri_m_img tri_aci_m_img' alt='tri_aci' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_aci_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAci_m_S1_img} alt="윤서연 이미지" />
                            <h4>윤서연</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS2' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAci_m_S2_img} alt="정혜린 이미지" />
                            <h4>정혜린</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS3' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAci_m_S3_img} alt="이지우 이미지" />
                            <h4>이지우</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS4' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAci_m_S4_img} alt="김채연 이미지" />
                            <h4>김채연</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS5' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAci_m_S5_img} alt="김유연 이미지" />
                            <h4>김유연</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS6' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAci_m_S6_img} alt="김수민 이미지" />
                            <h4>김수민</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS7' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAci_m_S7_img} alt="김나경 이미지" />
                            <h4>김나경</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS8' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAci_m_S8_img} alt="공유빈 이미지" />
                            <h4>공유빈</h4>
                        </article>
                    </Link>


                </section>


            </section>


        </div>
    );
};
