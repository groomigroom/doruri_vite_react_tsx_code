import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './YenaMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Yena_m_logo from './img/Yena_m_logo_191919.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import Yena_m_img from './img/Yen_m_img.jpg';

//#191919

export default function YenaMain() {
    return (
        <div className='yen_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/YenaMain' className="on">한국어</Link>
                <Link to='/YenaMainEng'>English</Link>
            </section>
            <img src={Yena_m_logo} alt="최예나 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="최예나 꾸미기" />최예나<img src={MainH2Deco} alt="최예나 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;최예나&apos;와 함께<br />
                ca-ca-catch<br />
                my heart!
            </p>
            <img src={Yena_m_img} className='tri_m_img yen_m_img' alt='최예나' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 소개 ▪</h2>
            <section className='tri_m_mem_tr_full yen_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/YenaMem' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Yena_m_img} alt="최예나" />
                            <div>
                                <h4>최예나</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile yen_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/YenaMem' className='tri_m_mem_a'>
                            <img src='' alt="최예나" />
                            <h4>최예나</h4>
                        </Link>
                    </section>
                </section>
            </section>

            <FooterPart FooterPartText='ⓒ YH엔터테인먼트' />
        </div>
    );
};



