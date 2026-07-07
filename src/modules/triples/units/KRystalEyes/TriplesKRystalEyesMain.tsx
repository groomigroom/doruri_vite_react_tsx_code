import { Link } from 'react-router-dom';

import '../../main/TriplesMain.css';
import './TriplesKRystalEyesMain.css';

import Menu from '../../../Menu';

import TriplesKre_m_logo from './img/TriplesKre_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
import TriplesKre_m_img from './img/TriplesKre_m_img.jpg';

import TriplesKre_m_S1_img from './img/TriplesKre_m_S1_img.jpg';
import TriplesKre_m_S3_img from './img/TriplesKre_m_S3_img.jpg';
import TriplesKre_m_S4_img from './img/TriplesKre_m_S4_img.jpg';
import TriplesKre_m_S6_img from './img/TriplesKre_m_S6_img.jpg';

//#909090

export default function TriplesKRystalEyesMain() {
    return (
        <div className='tri_kre_m_full'>
            <Menu />
            <img src={TriplesKre_m_logo} alt="tri_kre 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_aaa 로고 꾸미기" />+&#40;KR&#41;ystal Eyes<img src={MainH2Deco} alt="tri_aaa 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;+&#40;KR&#41;ystal Eyes&apos;와 함께<br />
                더 빠른 하루로<br />
                Boom cherry talk!
            </p>
            <img src={TriplesKre_m_img} className='tri_m_img tri_kre_m_img' alt='tri_kre' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_kre_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesKre_m_S1_img} alt="윤서연 이미지" />
                            <h4>윤서연</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS3' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesKre_m_S3_img} alt="이지우 이미지" />
                            <h4>이지우</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS4' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesKre_m_S4_img} alt="김채연 이미지" />
                            <h4>김채연</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS6' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesKre_m_S6_img} alt="김수민 이미지" />
                            <h4>김수민</h4>
                        </article>
                    </Link>


                </section>


            </section>


        </div>
    );
};
